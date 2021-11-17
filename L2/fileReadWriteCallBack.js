const fs = require("fs");
const yargs = require("yargs");
// const minimist = require("minimist")(process.argv.slice(2));

fs.readFile("./input.html", "utf-8", (err, data) => {
    if(err){
        console.log("Error in reading\n");
        return;
    }
    data = data.replace(`{name}`, yargs.argv.name);
    console.log(data);
    fs.writeFile("./output.html", data, err => {
        if(err) {
            console.log("Error in writing\n");
            return;
        }
    });
});