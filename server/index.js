const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const router = require('./routes/router')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

const coreOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,
}

app.use(cors(coreOptions))
app.use('/', router)

const PORT = 4000
const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})