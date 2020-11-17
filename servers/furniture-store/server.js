const express = require('express');
const app = express()
const path = require('path')



app.use('/priceCheck',express.static(path.join(__dirname, 'dist')))


// data 

const store = [
    { name: "table", inventory: 3, price: 800 },
    { name: "chair", inventory: 16, price: 120 },
    { name: "couch", inventory: 1, price: 1200 },
    { name: "picture frame", inventory: 31, price: 70 }
]

//end of data 




app.get(`/priceCheck/:name` ,function(req, res){
    const name = req.params.name
    for(let i of store){
        if(name === i.name){
            res.send({"price": `${i.price}`})
        }
    }
    res.send({"price": "null"})
})

app.get(`/buy/:name` ,function(req, res){
    const name = req.params.name
    for(let i of store){
        if(name === i.name){
            if(i.inventory <= 0){
                res.send({"deal": "0 in store"})
                return
            }else{
                i.inventory--
                res.send({"deal": `done`})
                return
            }
        }
    }
    res.send({"deal": "null"})
})


const port = 3000
app.listen(port, function(){
    console.log("Server is up and running smoothly on port : " +port)
})
