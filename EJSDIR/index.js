const express = require("express");
const app = express();
// const path = require("path");

let port = 3000;

app.set("view engine","ejs")

// define Path Of Views folder directly to js

// app.set("views",path.join(__dirname,"/views"))

app.get("/",(req,res)=>{
    res.render("home.ejs")
})

app.get("/mahesh",(req,res)=>{
    res.send("Hello Mahesh")
})

app.listen(port,()=>{
    console.log("Server Started!!!");    
}); 