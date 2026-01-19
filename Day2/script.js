// array and object
// var arr = [1,2,3,4,5,6,6];
// arr.forEach(function(val){
//     console.log(val + " hello world");
// });

//  var newarr = arr.map((val)=>{
//     return val + 10;
// });
// console.log(newarr);

// const filteredArr = arr.filter((val)=>{
//     if(val > 3 ){
//         return true;
//     }
//     else{
//         return false;
//     }
// })
// console.log(filteredArr);

// const foundVal = arr.find((val)=>{
//     if(val == 5){
//         return true;
//     }
//     else{
//         return false;
//     }
// })
// console.log(foundVal);

// const index = arr.indexOf(6);
// console.log(index);

// var ob = {
//     name : "khadim",
//     age : 20,
//     city : "karachi"
// }
// console.log(ob.name);
// ob.freeze();

// ASYNC FUNCTION
// async function myFunction(){
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const data = await response.json();
//     console.log(data);
// }
// myFunction();

const fs = require('node:fs');

// fs.writeFile("Hay.txt", "This is khadim ali soomro" , (err)=>{
//     if(err) throw err;
//     console.log("File created successfully");
// } );

// fs.rename("Hay.txt", "Hello.txt", (err)=>{
//     if(err) throw err;
//     console.log("File renamed successfully");
// });

// fs.copyFile("Hello.txt", "./copy/hay.txt",(err)=>{
//     if(err) throw err;
//     console.log("File copied successfully");
// });

// fs.unlink("Hello.txt", (err)=>{
//     if(err) throw err;
//     console.log("File deleted successfully");
// })

// fs.rm("./copy",{recursive:true},(err)=>{
//     if(err) throw err;
//     console.log("Directory deleted successfully");
// });

// fs.mkdir("newFolder", (err)=>{
// if(err) throw err;
// console.log("Directory created successfully");
// }) 


const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log("This is a middleware function");
    next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("This is Khadim ali A Computer science Student💻 && MERN Stack Developer Learner 🌐");
});

app.get("/about", (req, res) => {
    res.send("This is About Page API Route. Thank you for accessing man✌️ ");
});

app.get("/error", (req, res, next) => {
    return next(new Error("This is a custom error message from the server"));
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something went wrong! you can write your custom error message here.");
});

app.listen(3000);
console.log("Server is running on port 3000");

