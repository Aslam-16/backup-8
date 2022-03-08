var fs=require('fs');
fs.readFile('./demo.js',(err,data)=>{
    if(err) console.log(err);
    else console.log(data.toString());
})
console.log('hi from end');
