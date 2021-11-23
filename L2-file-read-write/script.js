#!/usr/bin/env node

const linearSearch = require("./linear-search");

console.log("hello world");
linearSearch([1,2,3],3);

// to get cli.js from script.js we do the following:
// cat script.js | tr -d '\r' > cli.js