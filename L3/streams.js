const fs = require("fs");
const stream = require("stream");

const inputStream = fs.createReadStream("./input.txt");
const outputStream = process.stdout;
const writeStream = fs.createWriteStream("./output.txt");

const transformStream = new stream.Transform({
    transform(chunk, enc, nextStreamCallBack){
        this.push(String(chunk).toUpperCase());
        setTimeout(() => nextStreamCallBack(), 5000);
        
    }
});

inputStream.pipe(transformStream).pipe(writeStream);



