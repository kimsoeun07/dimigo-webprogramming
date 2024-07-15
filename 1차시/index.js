// let star = "";
// for (let i = 0; i < 10; i++){
//     let starTmp = ""
//     for (let j = 0; j < i+1; j++){
//         if ((j+1)%3 == 0)
//             starTmp = starTmp + " ";
//         else
//             starTmp = starTmp + "*";
//     }
//     star = star + starTmp.split("").reverse().join("") + "\n"

// }
// console.log(star)


// for (let i = 0; i < 6; i++){
//     for (let j = 0; j < 6; j++){
//         if(j == i || j == 5-i){
//             // console.log("*");
//             process.stdout.write("*");
//         }
//         else{
//             // console.log(" ")
//             process.stdout.write(" ");
//         }
//     }
//     console.log()
// }

/* ====== create node.js server with core 'http' module ====== */
// dependencies
const http = require("http");

// // PORT
// const PORT = 3000;

// // server create
// const server = http.createServer((req, res) => {
//    if (req.url === "/") {
//       res.write("This is home page.");
//       res.end();
//    } else if (req.url === "/about" && req.method === "GET") {
//       res.write("This is about page.");
//       res.end();
//    } else {
//       res.write("Not Found!");
//       res.end();
//    }
// });

// // server listen port
// server.listen(PORT);

// console.log(`Server is running on PORT: ${PORT}`);

// ======== Instructions ========
// save this as index.js
// you have to download and install node.js on your machine
// open terminal or command prompt
// type node index.js
// find your server at http://localhost:3000


// const http = require('http');

// http.createServer((req, res) => {
// 	res.write('<h1>Hello, World!</h1>');
// 	res.end();
// }).listen(3000);

// const express = require('express')
// const app = express()
const port = 3000

http.get('/user/:id', (req, res) => {
    const param = req.params
    console.log(param)
    console.log(param.id)

    res.json(param.id)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})