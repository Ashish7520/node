const http=require('http')

const routs= require('./routs')

const server=http.createServer(routs)

server.listen(4000)