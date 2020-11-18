const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')

const wordCounter = {}
router.get('/sanity', function(req,res){
    res.send("Server up and running");
})

router.get('/word/:word', function(req,res){
    res.send({count : wordCounter[word]-1 || 0})
})


router.post('/word', function(req,res){
    const word = req.body
    wordCounter[word.word] = (wordCounter[word.word]+1) || 1
    res.send({text: `Added ${word.word}`, currentCount: `${wordCounter[word.word]}` })
})


router.post('/words', function(req,res){
    const words = req.body
    const sentence = words.words.split(' ')
    let existWords = 0 ;
    let newWords = 0;
    for(let i of sentence){
        wordCounter[i] = (wordCounter[i]+1) || 1
        if(wordCounter[i] == 1){
            newWords++ 
        }else{
            existWords++
        }
    }
    res.send({text: `Added ${newWords} words, ${existWords} already existed`, currentCount: -1 })

})



module.exports = router

