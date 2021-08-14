const express = require('express')
const app = express()
app.use(express.json())

const callAPIs = require('./routes/index')

app.use('/', callAPIs)

app.listen(7000, (err) => {
    if(err) throw err;
    console.log('Server running ---')
});

