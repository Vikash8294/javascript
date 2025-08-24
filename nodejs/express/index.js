const http = require ("http");
const fs = require("fs");
const url = require("url");
const express = require("express");

const app = express();
app.get("/",(req,res)=>{
    return res.send("heloo from home page");
});
app.get('/about',(req,res)=>{
    return res.send(`Hii ${req.query.name}`);

});

const myServer = http.createServer(app);
    

myServer.listen(8000, () => console.log("server stared"));