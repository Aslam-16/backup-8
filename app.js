// var http=require('http');
// var url =require('url');

// http.createServer((req,res)=>{
//     var q = url.parse(req.url, true);
//     console.log(q);
//   res.write('hiiii');
//   res.end()
// }).listen(8888,()=>{console.log('listening at port 8888');})
var data='<html><body><form action="/cal" method="get"> <label for="fname">Number1:</label><br><select name="func"><option value="div">div</option><option value="mul">mul</option><option value="sub">sub</option><option value="add">add</option></select><input type="text" id="fname" name="a"><br><label for="lname">number 2</label><br><input type="text" id="lname" name="b" ><br><br><input type="submit" value="Submit"></form> </body></html>'
var server=require('./server');
server.server(data)