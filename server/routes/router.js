const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send("WELCOME TO THE SERVER OF A.T. RECIPES")
})

router.get('/api/recipes', (req, res) => {
    res.json({
        "Apple Crumble": {
            "ingredients": ["apples","flour","almond-powder","butter","sugar"],
            "prepTime": "20min"
        },
        "Waffles": {
            "ingrediends": ["flour","sugar","butter","eggs","salt","milk","baking-powder","vanilla-extract"],
            "prepTime": "30min"
        }
    })
})

module.exports = router