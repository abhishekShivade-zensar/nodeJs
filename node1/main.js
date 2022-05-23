var http = require('http');
http.createServer(function (req,res){
    console.log('Recieving Request');
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.write('Hello World\n');
    res.end();
}).listen(3000,'localhost');

console.log('Server running at http://localhost:3000/');

var fs = require('fs');
console.time('Start timer Read');
console.time('Start timer Write');

fs.readFile('text.txt', function(err,data){
    if(err){
        console.log("File Reading err: "+ err);
        return;
    }
    console.log("File Reading: "+ data);
    console.timeEnd('Start timer Read');
});

fs.writeFile('write.txt', 'writing to file 111 3333', function(){
    console.log("Done with file write\n");
    console.timeEnd('Start timer Write');
});

console.log('Done\n');