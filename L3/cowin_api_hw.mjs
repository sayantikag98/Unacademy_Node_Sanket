import fetch from "node-fetch";
import minimist from "minimist";

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

        console.log("\n_______________________**************************************__________________________\n");
        console.log(`QUERIES`);
        console.log("----------------------------------------------------------------------------------------\n");
        console.log(`State: ${state}`);
        console.log(`Vaccine: ${vaccineType}`);
        console.log(`Price: ${priceType}`);
        console.log(`Date: ${date}`);
        console.log("----------------------------------------------------------------------------------------\n\n");
        
        districts.forEach(async district => {
            const vaccineSessionData =  await dataFetch(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district.district_id}&date=${inputDate}`);
            const vaccineSessions = vaccineSessionData.sessions;
            const vaccineSessionsFiltered = vaccineSessions.filter(session => session.vaccine === vaccineType && session.fee_type === serviceType);
            if(vaccineSessionsFiltered.length>0){
                console.log("***************************************************************************");
                console.log(district.district_name);
                console.log("***************************************************************************\n");
                vaccineSessionsFiltered.forEach(vaccine => {
                    console.log(`Vaccine Center => ${vaccine.name}`);
                    console.log(`Vaccine Center Pincode => ${vaccine.pincode}`);
                    if(vaccine.fee_type === "Paid") console.log(`Vaccine Fee => Rs.${vaccine.fee}`);
                    console.log(`Vaccine available capacity => ${vaccine.available_capacity}`);
                    console.log(`Vaccine capacity for Dose 1 => ${vaccine.available_capacity_dose1}`);
                    console.log(`Vaccine capacity for Dose 2 => ${vaccine.available_capacity_dose2}`);
                    console.log(`Minimum age limit for vaccine => ${vaccine.min_age_limit}`);
                    console.log(`Vaccine available slots => `);
                    vaccine.slots.forEach(slot => {console.log(slot);})
                    console.log("_____________________________________________________________________________\n");
                });
            }
        });

    }
    catch(err){
        console.log(err.message);
    }  
};

vaccineData(state, vaccineType, priceType, date);