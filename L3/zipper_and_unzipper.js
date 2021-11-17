const { createReadStream, createWriteStream } = require("fs");
const { pipeline } = require("stream/promises");

const zipUnzipFunc = async (inputDestination, outputDestination, zipperMode) => {
    try{
        const readStream = createReadStream(inputDestination);
        const writeStream = createWriteStream(outputDestination);
        await pipeline(readStream, zipperMode, writeStream);
    }
    catch(err){
        console.log("Error: "+err.message);
        process.exitCode = 1;
    }   
};

module.exports = zipUnzipFunc;