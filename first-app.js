const fs= require('fs')
fs.writeFileSync('hello.txt','hello from node.js')


const productOfTwo=(a,b)=>{
    return a*b
}

console.log(productOfTwo(2,3))