const express = require('express')

const app = express()


app.get('/', (req, res) => {
    res.send("I know how to Open it")
});

app.listen(4200, () => console.log('Listening to pport 4200'));