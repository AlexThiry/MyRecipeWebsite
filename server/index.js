const express = require('express');
const axios = require('axios')
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./routes/router');
const fileUpload = require('express-fileupload');

//Setting up database
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const dbPath = path.join(__dirname, 'database', 'recipes.db');
const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log("Database connection successful");
        db.run(`CREATE TABLE IF NOT EXISTS recipes (Author TEXT, RecipeName TEXT, Ingredients TEXT, PrepTime TEXT, CookTime TEXT, TotalTime TEXT, Instructions TEXT, Tags TEXT, Image BLOB)`);
    }
});

const insertInfo = `INSERT INTO recipes (Author, RecipeName, Ingredients, PrepTime, CookTime, TotalTime, Instructions, Tags, Image) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
// db.run(insertInfo, ["Alex", "Caesar Salad", "romaine lettuce, parmesan, anchoives, bread, dressing, lemon", "10min", "0min", "10min", "yum", "Lunch"], (err) => {
//     if (err) {
//         console.error(err.message);
//     } else {
//         console.log("Data insertion successful");
//     }
// });

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(fileUpload())

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
            // Convert image object to Base64-encoded string
            rows.forEach(recipe => {
                recipe.Image = Buffer.from(recipe.Image).toString('base64');
            });
            res.status(200).json({ recipes: rows });
        }
    });
});


app.post('/api/recipes/new', (req, res) => {
    console.log("recieved data", req.body);
    const { Author, RecipeName, Ingredients, PrepTime, CookTime, TotalTime, Instructions, Tags, Image } = req.body;
    const imageData = Image || 'src/images/placeholder.png';
    db.run(insertInfo, [Author, RecipeName, Ingredients, PrepTime, CookTime, TotalTime, Instructions, Tags, imageData], (err) => {
        if (err) {
            res.status(500).json({message: `There was en error adding your recipe: ${err.message}`});
            console.error(`There was en error adding your recipe: ${err.message}`);
        } else {
            res.status(200).json({ message: `${req.body.RecipeName} successfully added!`});
            console.log(`${req.body.RecipeName} successfully added!`);
        }
    })
})

const PORT = 4000;
const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})