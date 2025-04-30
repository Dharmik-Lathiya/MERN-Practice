let jsonRes = '{"fact":"The first cat show was in 1871 at the Crystal Palace in London.","length":63}';

let ValidJson = JSON.parse(jsonRes);
console.log(ValidJson);

console.log('ValidJson', ValidJson);

let obj = {
    name : "Dharmik",
    age : 20,
    study : "BCA"
}
console.log(obj);

let OWNapi = JSON.stringify(obj);
console.log(OWNapi);




