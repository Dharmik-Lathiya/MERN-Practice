let url = "https://catfact.ninja/fact";
let url2 = "https://dog.ceo/api/breeds/image/random";
let url3 = "https://icanhazdadjoke.com/";
let url4 = "http://universities.hipolabs.com/search?name=";

// fetch(url)
// .then((res)=>{
//     return res.json();
// })
// .then((data)=>{
//     console.log("DATA 1");
//     console.log(data.fact);
//     return fetch(url);
// })
// .then((res2)=>{
//     return res2.json();
// })
// .then((data2)=>{
//     console.log("Data 2!!");
//     console.log(data2.fact);
// })
// .catch((err)=>{
//     console.log(err);
// })

// console.log("Hello DHarmik!!");

// Usinmg Async And Await Keyword

// async function getData() {
//   try {
//     let res = await fetch(url);
//     let data = await res.json();
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// }

// Using Axios Library

async function getData() {
  let res = await axios.get(url);
  console.log(res.data);
  let p = document.querySelector("p");
  p.innerText = res.data.fact;
}
async function getDogData() {
  let res = await axios.get(url2);
  console.log(res.data);
  let imgSrc = document.getElementById("img");
  imgSrc.src = res.data.message;
}

async function getJoke() {
  try {
    let config = { headers: { Accept: "application/json" } };
    let res = await axios.get(url3,config);
    console.log(res.data);
    let pJoke = document.getElementById("joke");
    pJoke.innerText=res.data.joke;
  } catch (err) {
    console.log(err);
  }
}

async function getUni(){
    try{
        let input = document.getElementById("country").value;
        let res = await axios.get(url4+input);

        let ol = document.getElementById("ol");
        ol.innerText="";
        for(test of res.data){
            console.log(test);
            let li = document.createElement("li");
            li.innerText=test.name;
            ol.appendChild(li);
        }
    }
    catch(errr){
        console.log(errr);
    }
}
