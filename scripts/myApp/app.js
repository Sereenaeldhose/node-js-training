const express = require("express");
const app = express();
const bodyParser = require('body-parser');

var urlEncoderParser =bodyParser.urlencoded({extended :false});
app.listen(8080, () => {
  console.log("server is listening to port number 8000");
});

//
app.get("/", (req, res) => {
    res.send("Hello Node JS");
});

//
app.get("/json", (req, res) => {
    var jsondata = [
      { name: "vp", email: "vp@gmail.com" },
      { name: "sereena", email: "sereena@gmail.com" },
    ];
    res.json(jsondata);
  });

// 
app.get('/html', (req, res) => {
    res.sendFile('./welcome.html',{root:__dirname})
  });

//
app.post('/post', (req,res)=>{
res.send(`Got a POST request!`)
});

  // 
  app.post('/post/data',urlEncoderParser, (req, res) => {
 
    response = {  
        first_name:req.body.first_name,  
        last_name:req.body.last_name  
    };  
    console.log(response);  
    res.json( response);
  });