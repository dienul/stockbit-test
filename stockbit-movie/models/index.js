const mysql = require('mysql')

const connection = mysql.createConnection({
    host : "45.127.133.91",
    user : "monty",
    password : "some_pass",
    database : "stockbit_movie",
})

module.exports = {
    connection,
}