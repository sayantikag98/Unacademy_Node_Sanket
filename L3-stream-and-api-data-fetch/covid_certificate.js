const axios = require("axios");

const dataFetchFunc = async (ref_id) => {
    try{
        const response = await axios(`https://cdn-api.co-vin.in/api/v2/registration/certificate/public/download?beneficiary_reference_id=${ref_id}`);
        console.log(response);
    }
    catch(err){
        console.log(err.message);
    }   
}; 

dataFetchFunc("1234567890123");
