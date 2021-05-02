const moment = require('moment');

const Logger = (req, res, next) =>{
    console.log("Hello I am a middleware");
    console.log("I am running on - " + req.protocol + "://" + req.get('host') + req.originalUrl + ':' + moment().format());
    console.log("**********");
    next();
}

module.exports = Logger