const express = require('express');
//const moment= require('moment');
const app = express();

const port = process.port||8001;

app.get("/healthcheck", async(req,res)=>{
    console.log(" it is a success");

    res.send({status:'success'})
}); 

app.listen(port,()=>{
    console.log("server started on port 8001 ")
}) 