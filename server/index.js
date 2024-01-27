const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./routes/router');

//Setting up database
const sqlite3 = require('sqlite3').verbose();
const path = require('path')
const dbPath = path.join(__dirname, 'database', 'recipes.db');
const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.log(err.message);
    } else {
        console.error("Database connection successful");
        db.run(`CREATE TABLE IF NOT EXISTS recipes(recipeName, ingredients, prepTime, cookTime, totalTime, instructions)`);
    }
});

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const coreOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,
}

app.use(cors(coreOptions));
app.use('/', router);

const PORT = 4000;
const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

db.close((err) => {
    if (err) return console.log(err.message);
    console.error("Database disconnection successful");
})