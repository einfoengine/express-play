var express = require('express')
var router = express.Router()
const users = require('../../users');


// Get JSON users list
router.get('/', (req, res)=> res.json(users));
/*
- Return JSON data as api
*/

// Get single user
router.get('/:id', (req, res)=>{
    const id = parseInt(req.params.id);
    const user = users.filter((user, key, arr) => user.id === id);
    if(user.length != 0){
        res.json(user);
    }else{
        // res.json({alert: "not found!"});
        res.status(400).json({message: "Opps!! Member not found!"});
    }
});

module.exports = router;