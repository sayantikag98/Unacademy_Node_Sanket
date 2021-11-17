const { createGzip, createGunzip } = require("zlib");
const zipUnzipFunc = require("./zipper_and_unzipper");

// For zipping a file
// zipUnzipFunc("input.txt", "input.txt.gz", createGzip());

// For unzipping a file
zipUnzipFunc("input.txt.gz", "output.txt", createGunzip());

