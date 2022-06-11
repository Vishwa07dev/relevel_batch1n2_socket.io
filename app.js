const express = require("express");

const app = express();

/**
 * How can I display or return html content to the 
 * user
 */

/**
 * GET  127.0.0.1:8000/hello
 */
app.get("/hello", (req, res)=>{
    console.log(__dirname + "/views/index.html");
    res.sendFile(__dirname + "/views/index.html");
})


app.listen(8000,()=>{
    console.log("App started");
})