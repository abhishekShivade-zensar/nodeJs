const http = require('http');
const pid = process.pid;
const p1 = process.arch;
const p2 = process.cwd();
const p3 = process.chdir('New folder');
const p4 = process.cwd();
console.log(p1);
console.log(p2);
// console.log(p3);
console.log(p4);
http.createServer((req, res) => {
  for (let i=0; i<1e7; i++); // simulate CPU work
  res.end(`Handled by process ${pid}`);
}).listen(3080, () => {
  console.log(`Started process ${pid}`);
});