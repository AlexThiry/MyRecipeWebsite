const express = require('express');
const router = express.Router();

const jsonDataTemplate = {
    "Apple Crumble": {
        "ingredients": ["apples","flour","almond-powder","butter","sugar"],
        "prepTime": "20min",
        "tags": ["Desert"]
    },
    "Waffles": {
        "ingrediends": ["flour","sugar","butter","eggs","salt","milk","baking-powder","vanilla-extract"],
        "prepTime": "30min",
        "tags": ["Breakfast"]
    },
    "Crepes": {
        "ingrediends": ["flour","sugar","butter","eggs","salt","milk","baking-powder","vanilla-extract"],
        "prepTime": "40min",
        "tags": ["Breakfast"]
    },
    "Pancakes": {
        "ingrediends": ["flour","sugar","butter","eggs","salt","milk","baking-powder","vanilla-extract"],
        "prepTime": "1h",
        "tags": ["Breakfast"]
    }
}

router.get('/', (req, res) => {
    res.send("WELCOME TO THE SERVER OF A.T. RECIPES");
})

router.get('/api/recipes', (req, res) => {
    db.all(`SELECT * FROM recipes`, [], (err, rows) => {
        if (err) {
            console.error(err.message);
        } else {
            rows.forEach((row) => {
                res.json({recipes: rows})
            });
        }
    })
})

module.exports = router;