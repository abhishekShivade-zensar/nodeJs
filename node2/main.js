var http = require('http');
http.createServer(function (req,res){
    console.log('Recieving Request');
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.write('Hello World\n');
    res.end();
}).listen(3000,'localhost');

console.log('Server running at http://localhost:3000/');

var fs = require('fs');
console.time('Start timer');

var data = fs.readFileSync('test.txt');
console.log("File Read: "+ data);
console.timeEnd('Start timer');

fs.writeFileSync('write.txt','Writing to file 111 3333');
console.log("Done with file write");
console.timeEnd('Start timer');
console.log('Done');