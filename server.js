require('dotenv').config()

const { application } = require('express');
const express = require('express')
const app = express()
const db = require("./db/dbConnection");


db.sequelize.sync();

app.use(express.json())
const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.send("Express server is up and running")
})

app.use(require('./routes/userRouter'))
app.use(require('./routes/courseRouter'))
app.use(require('./routes/internshipRouter'))


app.listen(port, _=> console.log(`The server is listening on port ${port}`));