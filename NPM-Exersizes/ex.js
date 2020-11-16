var faker = require('faker');

const validator = require('validator');

//EX1

console.log("does shoobert@dylan an EMAIL?"+validator.isEmail("shoobert@dylan"))

//ex2
console.log("does 786-329-9958 an PHONENUMBER?"+validator.isMobilePhone("786-329-9958",'en-US'))


//ex3
let blacklist = ["!", "?", ".", "@", "~", ",", "'"]


let text = "I'M SO EXCITED!!!~!"
text = validator.blacklist(text,blacklist)
console.log(text)



//FAKER

makeHuman = (num) =>{
    const humans =[];
    for(let i = 0; i< num ;i++){
        humans.push({
            name : faker.name.findName(), 
            profileImage: faker.image.image(), 
            companyName :faker.company.companyName()
        })
        console.log(`name is ${humans[i].name},profile picture : ${humans[i].profileImage} ,company name ${humans[i].companyName}`)
    }
}

makeHuman(2)