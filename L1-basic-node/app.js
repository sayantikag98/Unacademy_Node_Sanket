console.log("Hello World");
//process.stdout.write("Hello World");

console.error("Error");
//process.stderr.write("Error");

// node app.js > text.txt  ==> will print error to the terminal and wite hello world to text.txt file

// node app.js 1> text.txt ==> will print error to the terminal and wite hello world to text.txt file

// node app.js 2> text.txt ==> will print hello world to the terminal and wite error to text.txt file

// node app.js 2> text.txt 1>&2 ==> will print nothing to the console and write hello world and error to the text.txt file

// node app.js 1> text.txt 2>&1 ==> will print nothing to the console and write hello world and error to the text.txt file

// node app.js or node app.js 0>text.txt ==> will print both hello world and error to the terminal

// hello world is the normal log file

// error is the error log file

