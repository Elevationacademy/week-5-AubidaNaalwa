
const randomWord = $.get('/randomWord')
randomWord.then(function(word){
    $.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${word}`,function(book){
        console.log(book)
    })
}
)


const random = $.get('/randomWord')

random.then(function(word){
    const book = $.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${word}`)
    const Giphy =  $.get(`https://api.giphy.com/v1/stickers/search?api_key=wszWzju8QFAfuPs5s8i5LmPDJmXLI1Nd&q=${word}&limit=1`)

    Promise.all([book , Giphy]).then(function(results){
        console.log(`the word is ${word}, book name is ${results[0].items[0].volumeInfo["title"]} , and the Giphy is ${results[1].data[0].url}`);



    })
})