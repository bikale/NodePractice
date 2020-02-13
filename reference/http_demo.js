const http = require('http');

http.createServer((req,res)=>{
    res.write("hello world")
    res.end()

}).listen(1234,()=>console.log('server running....'))