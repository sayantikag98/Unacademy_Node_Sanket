const fs = require("fs/promises");
const yargs = require("yargs");

const fileReadWrite = async (inputPath, outputPath) => {
    try{
        let data = await fs.readFile(inputPath, "utf-8");
        data = data.replace(`{name}`, yargs.argv.name);
        await fs.writeFile(outputPath, data);
    }
    catch(err){
        console.log(err);
    }
};

fileReadWrite("./input.html", "./output.html");