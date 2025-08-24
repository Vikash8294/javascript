const http = require ("http");
const fs = require("fs");
const url = require("url");


const myServer = http.createServer((req,res) =>{
    if(req.url === "/favicon.ico") return res.end();
    const log = `${Date.now()}:${req.method}: ${req.url} New Req Recived\n`;
    const myUrl = url.parse(req.url);
    console.log(myUrl);
    fs.appendFile("./log.text",log, ((err , result) =>{
        switch(/* req.url */ myUrl.pathname){
            case'/' : 
            if (req.method==="GET")
                res.end("hompage");
                break;
            
            //  res.end("homepage");

            case '/about':
            const username = myUrl.query.myname;
            res.end(`hii ,${username}`);
            case '/signin' :
                if (req.method ==="GET") res.end("this is sign in page");
                else if(req.method ==="post")  {
                    res.end("suceesfull ");
                }
                break;



            
            default :  res.end("404 erroe");
                break;
            
        }
        
    })
);
    
});

myServer.listen(3000, () => console.log("server stared"));