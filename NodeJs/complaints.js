const consts = require('./consts');
const handleComplaint = require('./complaintsHandler');

let complaint1 = {
    text: "I'm not getting enough money",
    type: consts.FINANCE
}
let complaint2 = {
    text: "My salary hasn't come in yet",
    type: consts.FINANCE
}

let complaint3 = {
    text: "I'm always full of energy",
    type: consts.EMOTIONS
}


handleComplaint(complaint1) //should print "Money doesn't grow on trees, you know."
handleComplaint(complaint2) //should print "Money doesn't grow on trees, you know."
handleComplaint(complaint3) //should print 