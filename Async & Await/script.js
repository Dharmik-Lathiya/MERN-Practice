// function one(){
//     return 1;
// }
// function two(){
//     return one()+one();
// }
// function Sum(){
//     let ans = two() + one();
//     console.log(ans);
// }
// Sum();

// setTimeout(() => {
//     console.log("Hello World");
// }, 2000);

// console.log("Time Started");

// callBackHell

// let h1 = document.querySelector("h1");

// function changeColor(color, delay, nextColorChange) {
//   setTimeout(() => {
//     h1.style.color = color;
//     if (nextColorChange) nextColorChange();
//   }, delay);
// }

// changeColor("red", 1000, () => {
//   changeColor("green", 1000, () => {
//     changeColor("yellow", 1000, () => {
//       changeColor("pink", 1000, () => {
//         changeColor("white", 1000);
//       });
//     });
//   });
// });

// Promisses

// function Save(data) {
//   return new Promise((resolve, reject) => {
//     let InterNetSpeed = Math.floor(Math.random() * 10) + 1;

//     if (InterNetSpeed > 4) {
//       resolve();
//     } else {
//         reject();
//     }
//   });
// }

// Save("Mahesh").then(()=>{
//     console.log("data is Saved");
// }).catch(()=>{
//     console.log("Data Not Saved");
// })

// PromissChaning

// function Save(data) {
//   return new Promise((resolve, reject) => {
//     let InterNetSpeed = Math.floor(Math.random() * 10) + 1;

//     if (InterNetSpeed > 4) {
//       resolve();
//     } else {
//         reject();
//     }
//   });
// }

// Save("Mahesh").then(()=>{
//     console.log("First data is Saved");
//     return Save("Dogesh");
// })
// .then(()=>{
//     console.log("Data 2 Saved!!");
// })
// .catch(()=>{
//   console.log("Data Not Saved");
// })

// CallBackHell Problem Soluation     Promises chaning

// let h1 = document.querySelector("h1");

// function changeColor(color, delay) {
//     return new Promise((resolve,reject)=>{
//         if(resolve){
//             setTimeout(() => {
//                 h1.style.color = color;
//                 resolve("Color Changed");
//             }, delay);
//         }
//         else{
//             reject();
//         }
//     })

// }

// changeColor("red",1000).then(()=>{
//     console.log("Red Color Changed!!!");
//     return changeColor("green",1000);
// })
// .then(()=>{
//     console.log("Green Color Chnaged");
//     return changeColor("pink",1000);
// })
// .then(()=>{
//     console.log("Pink Color Changed");
//     return changeColor("yellow",1000);
// })
// .then(()=>{
//     console.log("Yellow Color Changed!");
// })
// .catch(()=>{
//     console.log("Not Changed");
// });

// Async Function

// async function greet(){
//     throw "404 Page Not Found!! ";
//     return "Hello";
// }
// greet().then((result)=>{
//     console.log("Promises Done!!",result);
// }).catch((result)=>{
//     console.log("Promise Not Execute!!",result);
// })

// let wait = async ()=>{
//     console.log("Hello World!!");

// }

// Await Function

// function getNum() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let Num = Math.floor(Math.random() * 10) + 1;
//       console.log(Num);
//       resolve();
//     }, 1000);
//   });
// }
// async function Name() {
//   await getNum();
//   await getNum();
//   await getNum();
//   getNum();
// }



let h1 = document.querySelector("h1");

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 10) + 1;
      if (num > 3) {
        reject("Promise Rejected!!");
      }
      console.log(`Color Change ${color}`);
      h1.style.color = color;
      resolve("Color Changed!!");
    }, delay);
  });
}

async function color() {
  try {
    await changeColor("red", 1000);
    await changeColor("orange", 1000);
    await changeColor("pink", 1000);
    await changeColor("blue", 1000);
  } catch (err) {
    console.log("Error Caught!!");
    console.log(err);
  }
}
