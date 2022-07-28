const express = require('express')
require('dotenv').config()
//enviormental var
const app = express()


app.get('/greeting/:name', (req, res) => {
    res.send(param)
    console.log('Hey, stranger')
    console.log(param + " it's so great to see you!")

})





//our port
app.listen(port,() => {
    console.log('I am listening on port' , port)
})