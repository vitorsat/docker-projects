const express = require('express')
const app = express()
const port = 3000
const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

const createPeople = `INSERT INTO people(name) values('Vitor')`
connection.query(createPeople)

const getPeoples = `select * from people`

app.get('/', (req, res) => {
  connection.query(getPeoples, (error, results) => {
    if (!error) {
      res.status(200).send(
      `<h1>Full Cycle Rocks!</h1>
      ${JSON.stringify(results)}`);
    }
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})