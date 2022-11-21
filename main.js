//Declare Const
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mysql = require('mysql')
const cors = require('cors')
const path = require('path')

// We declare the parameters of connection

/* Before start the server you should run the following commands on your command line interaface 
    - sudo mysql -u root -p
    - ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456789'
*/

let connection = mysql.createConnection(
    {
        host: '127.0.0.1',
        database: 'bankData',
        user: 'root',
        password: '123456789',

    }
)

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())
app.use('/', express.static(path.join(__dirname, 'public')))

connection.connect(function (err) {
    if (err) throw err
});


app.get('/api/clients', (req, res) => {
    connection.query("SELECT * FROM clients", (error, results, field) => {
        if (error) {
            res.status(400).send({ response: null })
        } else {
            res.status(200).send({ response: results })
        }
    })
});

app.post('/', function (req, res) {
    console.log("conseguimos los datos modificados");
    console.log(req.body);

    let id = req.body.id;
    let DNI = req.body.dni;
    let Name = req.body.name;
    let accountType = req.body.accountType;
    let amount = req.body.amount;
    let clientType = req.body.clientType;
    let entryDate = req.body.entryDate;

    let sql = "UPDATE `clients` SET `Id`='" + id + "', `Name`='" + Name + "', `accountType`='" + accountType + "', `Amount`='" + amount + "', `clientType`='" + clientType + "', `entryDate`='" + entryDate + "' WHERE `DNI`='" + DNI + "'";

    connection.query(sql, function (error, results, field) {
        if (error) {
            res.status(400).send({ results: null })
        } else {//si todos OK
            res.status(200).send(JSON.stringify("Bien"))
        }
    })//end of connection query 
})

app.listen(3000, () => {
    console.log("Aquesta és la nostra API-REST que corre en http://localhost:3000'")
})

