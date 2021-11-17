const { createGzip, createGunzip } = require("zlib");
const zipUnzipFunc = require("./zipper_and_unzipper");

// ******************************* ZIPPING A FILE ********************************************** //

// Text file
zipUnzipFunc("input.txt", "input.txt.gz", createGzip());

// Video file
// zipUnzipFunc("L3.mp4", "L3.mp4.gz", createGzip());

// ******************************* UNZIPPING A FILE ********************************************** //

// Text file
// zipUnzipFunc("input.txt.gz", "output.txt", createGunzip());

// Video file
// zipUnzipFunc("L3.mp4.gz", "L3_out.mp4", createGunzip());

