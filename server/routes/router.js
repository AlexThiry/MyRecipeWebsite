const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send("WELCOME TO THE SERVER OF A.T. RECIPES")
})

router.get('/recipes', (req, res) => {
    res.json({
        "choco-cake": "url",
        "plain-cake": "url",
        "choco-ice-cream": "url",
        "vanilla-cake": "url",
        "mango-sorbet": "url",
        "strawberry-sorbet": "url",
        "pear-sorbet": "url",
    })
})

module.exports = router