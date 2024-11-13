import express, { response } from "express";

const server = express();
const PORT = 8000;

server.get("/", (request, response) => {
  response.send("Hello world");
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT} ajillaj ehellee`);
});
