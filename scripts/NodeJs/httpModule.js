const http = require("node:http");
const fs = require("node:fs");
const person = {
    name : "John",
    age : 40
}

const server = http.createServer((req,res)=>{
    res.writeHead(200, {"Content-type": "text/plain"});
    res.end(JSON.stringify(person))
})
server.listen(3000, ()=>{
    console.log("Server is running in the port 3000");
})

const server2 = http.createServer((req,res)=>{
    res.writeHead(200, {"Content-type": "text/html"})
    res.end("<h1> Hello World!<h1>")
})
server2.listen(3001,()=>{
    console.log("Server2 is running in the port 3001");
})

const server3 = http.createServer((req,res)=>{
    res.writeHead(200, {"Content-type": "text/html"})
    const name = "Sereena";
    let html = fs.readFileSync("./index.html","utf-8")
    html = html.replace("{{name}}",name);
    res.end(html);
})
server3.listen(3002,()=>{
    console.log("Server3 is running in the port 3002");
})


const server4 = http.createServer((req,res)=>{
    res.writeHead(200, {"Content-type": "text/html"})
    fs.createReadStream("./index.html").pipe(res);  
})
server4.listen(3003,()=>{
    console.log("Server4 is running in the port 3003");
})
