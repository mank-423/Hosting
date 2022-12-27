const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res)=>{
    res.write("Hello");
    res.send();
    
    //res.sendFile(__dirname+'/index.html');
})


app.listen(port, ()=>{
    console.log("Hello");
})

