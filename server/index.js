const express = require('express');
const axios = require('axios')
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./routes/router');

//Setting up database
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const dbPath = path.join(__dirname, 'database', 'recipes.db');
const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log("Database connection successful");
        db.run(`CREATE TABLE IF NOT EXISTS recipes (recipeName TEXT, ingredients TEXT, prepTime TEXT, cookTime TEXT, totalTime TEXT, instructions TEXT, tags TEXT)`);
    }
});

const insertInfo = `INSERT INTO recipes (recipeName, ingredients, prepTime, cookTime, totalTime, instructions, tags) VALUES (?, ?, ?, ?, ?, ?, ?)`;
// db.run(insertInfo, ["Caesar Salad", "romaine lettuce, parmesan, anchoives, bread, dressing, lemon", "10min", "0min", "10min", "yum", "Lunch"], (err) => {
//     if (err) {
//         console.error(err.message);
//     } else {
//         console.log("Data insertion successful");
//     }
// });

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const coreOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,
}

app.use(cors(coreOptions));
//app.use('/', router);

app.get('/api/recipes', (req, res) => {
    db.all(`SELECT * FROM recipes`, [], (err, rows) => {
        if (err) {
            console.error(err.message);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            // Send the response outside the loop
            res.json({ recipes: rows });
        }
    });
});

app.post('/api/recipes/new', (req, res) => {
    console.log("recieved data", req.body);
    res.status(200).json({ message: "Recipe received successfully" });
})

const PORT = 4000;
const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})