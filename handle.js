const add=(a,b)=>{
    c=a+b;
    c=c+''
    console.log(c);
    return `Addition is: ${c}`
}
const sub=(a,b)=>{
    c=a-b;
    c=c+''
    console.log(c);
    return `Subtraction is: ${c}`
}
const mul=(a,b)=>{
    c=a*b;
    c=c+''
    console.log(c);
    return `Multiplication is: ${c}`
}
const div=(a,b)=>{
    c=a/b;
    c=c+''
    console.log(c);
    return `Division is: ${c}`
}

module.exports={
    add:add,
    mul:mul,
    sub:sub,
    div:div
}