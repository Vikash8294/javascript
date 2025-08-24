const express = require("express");
const usrers = require("./MOCK_DATA.json");
const app = express();
const PORT = 3000;

app.get('/users', (req, res)  => {
    return res.json(users);
})

app.listen(PORT,()=> console.log(`server started at Po`));