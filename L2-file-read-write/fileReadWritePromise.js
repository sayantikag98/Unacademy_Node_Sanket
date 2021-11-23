const fs = require("fs/promises");
const minimist = require("minimist")(process.argv.slice(2));

fs.readFile("./input.html", "utf-8")
.then(data => {
    data = data.replace(`{name}`, minimist.name);
    fs.writeFile("./output.html", data);
})
.catch(err => console.log(err));