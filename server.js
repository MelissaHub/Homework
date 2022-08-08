const express = require('express')

require('dotenv').config()

const port = process.env.PORT || 3003 // if 3000 missing or not set

//enviormental var
const app = express()
const total = 0
const tipPercentage = 0

 



app.get('/greeting/', (req, res) => {
    res.send('Hey, stranger')

})


app.get('/greeting/:name', (req, res) => {
    res.send(req.params.name + " it's so great to see you!")

})

app.get('/tip/:total/:tipPercent', (req, res) => {
    res.send(req.params.total * (req.params.tipPercent/100))
    

})

app.get('/magic/:question', (req, res) => {
    var items = ['Yes', 'No', 'Maybe']
    var item = items[Math.floor(Math.random() * items.length)]
    res.send(item)
   
})


app.get('/', (req, res) => {
    res.send("99 Bottles of beer on the wall" +  '<a href="/98">Take one down, pass it arround</a>')
    
   
})

app.get('/:numOfBottles', (req, res) => {
    
    if(req.params.numOfBottles== 0){
        res.send('0 Bottles of beer on the wall' + '<a href="/99">Start over!</a>')
        //how/why res.render('tmeplate', {title:'bottles zero})
        
        //this is to start over?
    }
    else{ 
        //res.render info with link that counts down
        res.send(req.params.numOfBottles + ' bottles of beer on the wall.' + `<a href="/${req.params.numOfBottles -1}">Take one down, pass it arround</a>`)

    }
   
})


//our port
app.listen(port,() => {
    console.log('I am listening on port' , port)
})