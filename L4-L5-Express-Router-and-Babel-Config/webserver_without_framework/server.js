const http = require("http");
const PORT = 3000;

const server = http.createServer((req, res) => {
    res.end("Hello server running...");
});

server.listen(PORT, () => {
    console.log(`Server running on localhost:${PORT}`);
});