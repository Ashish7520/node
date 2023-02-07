const mysql = require('mysql2')

const pool = mysql.createPool({
    host:'localhost',
    user: 'root',
    database:'node-complete',
    password:'Ashish@2000'
})

module.exports = pool.promise()