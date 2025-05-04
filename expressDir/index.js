const express = require("express");
const app = express();

let port = 3000;

app.listen(port, () => {
  console.log(`This is Load On Logically endpoint of Network ${port}`);
});

// app.use((req,res)=>{
//     // console.log(req);

//     // Simple Text
//     // res.send("This is Sended Data!!!")

//     //Object
//     // res.send({
//     //     name:"Dharmik",
//     //     age:20
//     // })

//     //Html
//     res.send("<h1 style='color:red'>404 Error</h1><ul><li>Data</li><li>Data2</li></ul>")

//     console.log("Request Recived");
// })

app.get("/", (req, res) => {
  console.log("Seaver UMmmmmmmmmmmmmmmmmmm!!!");
  res.send(
    "<h1 style='color:red'>Root Path</h1><ul><li>Data</li><li>Data2</li></ul>"
  );
});

// app.get("/dogesh",(req,res)=>{
//     console.log("Dogesg Bhai!!!!!!!");
//     res.send("Congretulationssss You are Dogesh!!!!")

// })

// app.get("/Mahesh",(req,res)=>{
//     console.log("Wahhh Nabira");
//     res.send("You Are Mahesh Bhai!!!!")
// })

// app.get("/*a",(req,res)=>{
//     res.send("Kon Cho Bhai Tu!!! Kone Puchi Ander Aviyo&&&&&&&&&&")
// })

// app.post("/",(req,res)=>{
//     res.send("You are sended A post Request");
// })

// Use Variable in Routes && Path Parameter

// app.get("/:id/:username",(req,res)=>{
//     let { username , id } = req.params;
//     res.send(`Hello Your @${username} and Id is ${id}`);
// })

// Use Query String

app.get("/search", (req, res) => {
  let {q} = req.query;
  console.log(q);

  if(!q){
    res.send("Kaik K To Lakh");
  }
  
  res.send(`Your Query is ${q}`);
});
