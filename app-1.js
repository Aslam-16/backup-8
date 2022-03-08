// // // // // get the reference of EventEmitter class of events module
// // // var events = require('events');

// // // //create an object of EventEmitter class by using above reference
// // // var em = new events.EventEmitter();

// // // //Subscribe for FirstEvent
// // // em.on('FirstEvent', function (data) {
// // //     console.log('First subscriber: ' + data);
// // // });

// // // // Raising FirstEvent
// // // em.emit('FirstEvent', 'This is my first Node.js event emitter example.');
// // process.stdin.resume();
// // process.stdin.setEncoding("ascii");
// // var input = "";
// // process.stdin.on("data", function (chunk) {
// //     input += chunk;
// // });


// // var events = require('events');
// // function demo () {
    
// //     // Enter your code here
    
// //     var n1=3
// //     var n2=5
// //     var em = new events.EventEmitter();
// //     em.on('MyEvent', function logInfo(n1,n2) {
// //   var result = 0;
// //   var result2=0;
  
// //   for (var i = 0; i <=1000; i++) {
// //     if (i % n1== 0 ) {
// //       result += i;
// //     }
// //   }
// //   for (var j = 0; j <=1000; j++) {
// //     if (j % n2== 0 ) {
// //       result2 += j;
// //     }
// //   }
// // setTimeout(()=>console.log(`Multiples of ${n1} & ${n2}
// // ${result+result2}`),5000)
// // })
// //     em.emit('MyEvent',n1,n2);
// // }
// // demo()
// // // function logInfo(n1,n2) {
// // //   var result = 0;
// // //   var result2=0;
  
// // //   for (var i = 0; i <=1000; i++) {
// // //     if (i % n1== 0 ) {
// // //       result += i;
// // //     }
// // //   }
// // //   for (var j = 0; j <=1000; j++) {
// // //     if (j % n2== 0 ) {
// // //       result2 += j;
// // //     }
// // //   }
// // // setTimeout(()=>console.log(`Multiples of ${n1} & ${n2} 
// // //  ${result+result2}`),2000)
// // // }
// var demo=require('./demo');
// // demo.print();
// // demo.para('aslam');
// var http=require('http');
// http.createServer((req,res)=>{
//   res.write(demo.print());
//   res.end()
// }).listen(8888)

//import the 'fs' and 'maths.js' module
//read the content of 'input.txt' file and copy the content to 'duplicate.txt' file
//call the 'sum and 'multiply' functions of maths module and store the return values in 'result' and 'product' variables
//write the content 'The sum of the numbers is: result. The product of the numbers is: product' to the 'output.txt' file



var fs=require('fs');
var maths=require('./maths')
var note;
fs.readFileSync('input.txt',(err,data)=>{
  if(err) console.log(err);
  else {
    note=data.toString();
    console.log('data',data.toString());
        console.log('note',note);

  }
  
})
fs.writeFileSync('duplicate.txt',note,(err)=>{
  if(err) console.log(err);
})

var sum=maths.sum(1,2); 
var mul=maths.mul(1,2);
var data=`The sum of the numbers is: ${sum}. The product of the numbers is: ${mul};
`
fs.writeFileSync('output.txt',data,(err)=>{
  if(err) console.log(err);
})