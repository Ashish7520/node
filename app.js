const http=require('http')

const server=http.createServer((req,res)=>{

    const url=req.url
    if(url === '/home'){
        res.write('<html>')
    res.write('<head><title> my first page</title></head>')
    res.write('<body><h1> Welcome Home</h1></body>')
    res.write('</html>')
    res.end()
    }else if(url === '/about'){
        res.write('<html>')
    res.write('<head><title> my first page</title></head>')
    res.write('<body><h1> welcome about us page</h1></body>')
    res.write('</html>')
    res.end()
    }else if(url === '/node'){
        res.write('<html>')
    res.write('<head><title> my first page</title></head>')
    res.write('<body><h1>Welcome to my node js project</h1></body>')
    res.write('</html>')  
    res.end()
    }
    //process.exit();- to exit from the server
    // res.setHeader('Content-Type', 'text/html')
    // res.write('<html>')
    // res.write('<head><title> my first page</title></head>')
    // res.write('<body><h1> Hello from my node.js server</h1></body>')
    // res.write('</html>')
    // req.end()
})

server.listen(4000)