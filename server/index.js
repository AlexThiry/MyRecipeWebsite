const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./routes/router');

//Setting up database
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const { error } = require('console');
const dbPath = path.join(__dirname, 'database', 'recipes.db');
const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log("Database connection successful");
        db.run(`CREATE TABLE IF NOT EXISTS recipes (recipeName, ingredients, prepTime, cookTime, totalTime, instructions, tags)`);
    }
});

const insertInfo = `INSERT INTO recipes (recipeName, ingredients, prepTime, cookTime, totalTime, instructions, tags) VALUES (?, ?, ?, ?, ?, ?, ?)`
// db.run(insertInfo, ["Test Recipe 2", ["apples","flour","almond-powder","butter","sugar"], "50min", "10min", "60min","test2", ["Dinner"]], (err) => {
//     if (err) {
//         console.error(err.message);
//     } else {
//         console.log("Data insertion successful");
//     }
// })
// db.all(`SELECT * FROM recipes`, [], (err, rows) => {
//     if (err) {
//         console.error(err.message);
//     } else {
//         rows.forEach((row) => {
//             console.log(row);
//         });
//     }
// })

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

const PORT = 4000;
const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

// db.close((err) => {
//     if (err) {
//         console.error(err.message);
//     } else {
//         console.log("Database disconnection successful");
//     }
// })