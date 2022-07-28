const express = require('express')
require('dotenv').config()
//enviormental var
const app = express()
const total = 0
const tipPercentage = 0



app.get('/', (req, res) => {

    for (i = 99; i <= 99; i++){
    console.log( bottle +' Bottles of beer on the wall')
    }
   
})

app.get('/magic/Will%20I%20Be%20A%20Millionaire', (req, res) => {
    console.log('Will I be a Millionaire?')
    var items = ['Yes', 'No', 'Maybe']
    var item = items[Math.floor(Math.random() * items.length)]
    res.send(item)
   
})

app.get('/tip', (req, res) => {
    res.send(total)
    res.send(tipPercentage)
})

//one should be at the bottom first?
app.get('/greeting/:name', (req, res) => {
    res.send(param)
    console.log('Hey, stranger')
    console.log(param + " it's so great to see you!")

})



//our port
app.listen(port,() => {
    console.log('I am listening on port' , port)
})