const axios = require("axios");
const {state, district, date, vaccine, price} = require("minimist")(process.argv.slice(2));

const dataFetch = async (inputState, inputDistrict, inputDate) => {
    try{
        const statesResponse = await axios("https://cdn-api.co-vin.in/api/v2/admin/location/states");
        const states = statesResponse.data.states;
        const state_id = states.find(state => state.state_name === inputState).state_id;
        const districtResponse = await axios(`https://cdn-api.co-vin.in/api/v2/admin/location/districts/${state_id}`);
        const districts = districtResponse.data.districts;
        const district_id = districts.find(district => district.district_name === inputDistrict).district_id;
        const vaccineSessionResponse = await axios(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district_id}&date=${inputDate}`);
        const vaccineSessions = vaccineSessionResponse.data.sessions;
        console.log(vaccineSessions.filter(vac => vac.vaccine === vaccine && vac.fee_type === price));
    }
    catch(err){
        console.log(err.message);
    }   
};

dataFetch(state, district, date, vaccine, price);