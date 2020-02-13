/* eslint-disable strict */

const fs = require('fs');
const path = require('path');

// directory creat

// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//     if (err) throw err;

//     console.log("Folder created");


// });

// fs.writeFile(path.join(__dirname, '/test', 'test.txt'), "hellow world", err => {
//     if (err) throw err;

//     console.log("Folder created");
// });

// fs.appendFile(path.join(__dirname, '/test', 'test.txt'), "selam alem", err => {
//     if(err) throw err;
//     console.log('file updated')

// }
// );


fs.readFile(path.join(__dirname,'/test','test.txt'),'utf8',(err,data)=>{
        if(err) throw err;
        console.log(data);
})