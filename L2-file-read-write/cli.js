#!/usr/bin/env node

const yargs = require("yargs");
const minimist = require("minimist");
const linearSearch = require("./linear-search");

console.log("hello world");
linearSearch([1,2,3],3);

const [,,...args] = process.argv;

console.log(args);

console.log(yargs.argv);
console.log(minimist(process.argv.slice(2)));

// to get cli.js from script.js we do the following:
// cat script.js | tr -d '\r' > cli.js