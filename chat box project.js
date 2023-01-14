
const express = require('express')

const fs = require('fs')

const bodyParser = require('body-parser')

const app= express()

app.use(bodyParser.urlencoded({extended:false}))


app.get('/login',(req,res,next)=>{
    res.send(`<form onsubmit="localStorage.setItem('username' ,document.getElementById('username').value)" action=/ method='POST'><input type='text' id='username' name='user'><button type='submit'> Login </button></form>`)})

app.get('/',(req,res,next)=>{
    fs.readFile('username.txt', (err,data)=>{
        if(err){
            console.log(err)
            data='chat does not exist'
        }
        res.send(`${data}<form onsubmit="document.getElementById('username').value = localStorage.getItem('username')" action='/' method='POST'>
    <input type='text' name='massage' id='massage'>
    <input type='hidden' id='username' name='username'>
    <button type='submit'> Chat </button></form>`)   
    })
     
})

app.post('/', (req,res)=>{
    console.log(req.body.username)
    console.log(req.body.massage)
    fs.writeFile('username.txt', `${req.body.username} : ${req.body.massage}`,{flag : 'a'}, (err)=>{
        err ? console.log(err) : res.redirect('/')
    })
})

app.listen(3000)
