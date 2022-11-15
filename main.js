'use strict'
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

// Declarem els paramtres de connexió
let connection = mysql.createConnection(
    {
        host:'127.0.0.1',
        database:'bankData',
        user:'root',
        password:'123456789',
        
    }
)

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(cors())

app.get('/api/clients', (req, res) => {
    connection.connect((err) => {
        //console.log(err)
        if (err) {
            console.log("Error connecting: " + err.stack)
            return
        }
        console.log("Connected as id " + connection.threadId)
    });
    connection.query("SELECT * FROM clients", (error, results, field) => {
        if (error) {
            res.status(400).send({response:null})
        } else {
            res.status(200).send({response:results})
        }
    })
});

app.listen(3000, () => {
    console.log("Aquesta és la nostra API-REST que corre en http://localhost:3000'")
})

