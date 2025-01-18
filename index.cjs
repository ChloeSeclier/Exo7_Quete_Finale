const cowsay = require("cowsay");
require("dotenv").config();

console.log(cowsay.say({
    text : process.env.NAME + " est au campus d'" + process.env.CAMPUS,
    e : "oO",
    T : "U "
}));