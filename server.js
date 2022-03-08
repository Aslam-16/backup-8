var http=require('http');
var url =require('url');
var handle=require('./handle.js');

function server(data){
http.createServer((req,res)=>{
    var q = url.parse(req.url, true);
    // console.log(q.pathname,q.query);
    if(q.pathname=='/cal'){
       let query=q.query
       console.log('length',query.func);
       let a=parseInt(query.a)
       let b=parseInt(query.b)
       if(query.func=='add'){
        let op=handle.add(a,b)
        console.log("data",op);
        res.write(op);
       }
        if(query.func=='sub'){
        let op1=handle.sub(a,b)
        console.log("data",op1);
        res.write(op1);
       }
        if(query.func=='mul'){
        let op2=handle.mul(a,b)
        console.log("data",op2);
        res.write(op2);
       }
        if(query.func==undefined){
        let op3=handle.div(a,b)
        console.log("data",op3);
        res.write(op3);
       }
    }
   else if(q.pathname=="/"){
        res.write(data);
    }
  
  res.end()
}).listen(8888,()=>{console.log('listening at port 8888');})
}
module.exports={
    server:server
}