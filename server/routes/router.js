const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send("WELCOME TO THE SERVER OF A.T. RECIPES")
})

router.get('/api/recipes', (req, res) => {
    res.json({"recipes": ["choco-cake", "plain-cake"]})
})

module.exports = router