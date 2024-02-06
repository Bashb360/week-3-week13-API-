const express = require('express');
const app = express()
const port = 3000

app.get ('/homework', (req, res) => {
    res.send('Welcome to Luxury Apartments');
})

app.listen(port, () => {
console.log(`Server is running on http://localhost:${port}`)
}) 