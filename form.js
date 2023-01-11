const http=require('http')
const fs= require('fs') 
const server=http.createServer((req,res)=>{

    const url=req.url
    const method=req.method
    if(url === '/'){
        res.write('<html>')
    res.write('<head><title> my first page</title></head>')
    res.write('<body><form action="/massage" method="POST"><input type="text" name="massage"><button type="submit">send </button></form></body>')
    res.write('</html>')
    return res.end()
    }

    if(url==='/'){
        fs.readFile("massage.txt", {encoding:'utf-8'},(data)=>{
            // if(err){
            //     console.log(err)
            // }
            console.log(`data from file `+ data)
            res.write('<html>')
    res.write('<head><title>Enter Massage </title></head>')
    res.write(`<body>${data}</body>`)
    res.write('<body><form action="/massage" method="POST"><input type="text" name="massage"><button type="submit">send </button></form></body>')
    res.write('</html>')
    return res.end()
        })
    }

    if(url==='/massage' && method==='POST'){
        const body=[]
        //(way of event listner)to get the data passed by user it will saved as chunk 
        req.on('data', (chunk)=>{
            console.log(chunk)
            body.push(chunk)
        })
        // to buffer the given data and log the massage
        req.on('end', ()=>{
            const parsedBody= Buffer.concat(body).toString();
            //console.log(parsedBody)
            //data given by user to save to the file
            const massage=parsedBody.split('=')[1]
            fs.writeFile("massage.txt", massage, (error)=>{
                res.statusCode=302
                res.setHeader('Location','/')
                return res.end()
            })

        })
       

    }
})

server.listen(4000)