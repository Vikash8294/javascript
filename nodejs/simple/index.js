const http = require ("http");
const fs = require("fs"); 
const myServer = http.createServer((req,res) =>{
    const log = `${Date.now()}: ${req.url} New Req Recived\n`;
    fs.appendFile("./log.text",log, ((err , result) =>{
        switch(req.url){
            case'/' : res.end("homepage");
                break;

            case '/about': res.end("I am vikash");
                break;

            
            default :  res.end("404 erroe");
                break;
            
        }
        
    })
);
    
});

myServer.listen(8000, () => console.log("server stared"));