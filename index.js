const info = require('./information.js');
const cowsay = require('cowsay');

console.log(cowsay.say({
    text: `Je suis ${info.name} et je viens de ${info.campus}`,
    e: "0-0",
    T: "U"
}));