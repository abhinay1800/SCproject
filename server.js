const http = require("http"); //http is npm

const app = require("./Backend/app");

// const server = http.createServer((req,res)=>{
//     res.end("Welcome to My Node JS");
// });
const server = http.createServer(app);

server.listen(3000, ()=>{
    console.log("Please check port no 3000");
});