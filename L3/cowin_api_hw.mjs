import fetch from "node-fetch";
import minimist from "minimist";
import {appendFile, writeFile} from "fs/promises";
import mailSendFunc from "./node-mailer/node_mailer.mjs";

const {state, vaccineType, priceType, date} = minimist(process.argv.slice(2));

const dataFetch = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
};


const vaccineData = async (inputState, vaccineType, serviceType, inputDate) => {
    try{
        const stateData = await dataFetch("https://cdn-api.co-vin.in/api/v2/admin/location/states");
        const states = await stateData.states;
        const state_id = states.find(state => state.state_name === inputState).state_id;
        const districtData = await dataFetch(`https://cdn-api.co-vin.in/api/v2/admin/location/districts/${state_id}`);
        const districts = await districtData.districts;

        writeFile("vaccineInfo.txt", "");

        let vaccineInfoAllDistricts = {};
        let query = {};
        query.state = state;
        query.vaccine = vaccineType;
        query.price = priceType;
        query.date = date;
        vaccineInfoAllDistricts.query = query;
        vaccineInfoAllDistricts.data = [];

        await districts.forEach(async district => {
            let vaccineInfoIndividualDistrict = {};
            const vaccineSessionData =  await dataFetch(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district.district_id}&date=${inputDate}`);
            const vaccineSessions = vaccineSessionData.sessions;
            const vaccineSessionsFiltered = vaccineSessions.filter(session => session.vaccine === vaccineType && session.fee_type === serviceType);
            let vaccineCenterByDistrict = [];
            if(vaccineSessionsFiltered.length>0){
                vaccineSessionsFiltered.forEach(vaccine => {
                    let vaccineCenterInfo = {};
                    vaccineCenterInfo.vaccineCenter = vaccine.name;
                    vaccineCenterInfo.pincode = vaccine.pincode;
                    if(vaccine.fee_type === "Paid") vaccineCenterInfo.vaccineFee = vaccine.fee;
                    vaccineCenterInfo.availableCapacity = vaccine.available_capacity;
                    vaccineCenterInfo.availableCapacityDose1 = vaccine.available_capacity_dose1;
                    vaccineCenterInfo.availableCapacityDose2 = vaccine.available_capacity_dose2;
                    vaccineCenterInfo.minAgeLimit = vaccine.min_age_limit;
                    vaccineCenterInfo.slots = []
                    vaccine.slots.forEach(slot => {vaccineCenterInfo.slots.push(slot)});
                    vaccineCenterByDistrict.push(vaccineCenterInfo);
                });    
            }
            vaccineInfoIndividualDistrict[`${district.district_name}`] = vaccineCenterByDistrict;
            vaccineInfoAllDistricts.data.push(vaccineInfoIndividualDistrict);
            await appendFile("vaccineInfo.txt", JSON.stringify(vaccineInfoIndividualDistrict));
        })

        mailSendFunc("sayantikaghosh98@gmail.com", "Re: Vaccine Center Info", "", "", [{filename: "vaccine-info.txt", path: "./vaccineInfo.txt"}]);

    }
    catch(err){
        console.log(err.message);
    }  
};

vaccineData(state, vaccineType, priceType, date);