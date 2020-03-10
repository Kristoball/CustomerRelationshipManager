const router = require('express').Router();
let Users = require('../models/user.model');
let jwt = require("jsonwebtoken");
let bcrypt = require('bcrypt');

const secretKey = process.env.secretKey;

router.route('/').post((req, res) => {

    Users.findOne( { 'name' : req.body.name } )
        .then(user=>{
            if(!user){
                res.status(401).json({message:"Wrong password or username", data: null});
                return;
            }

            if(!user.active){
                res.status(401).json({message:"User is not active", data: null});
                return;
            }

            bcrypt.compare(req.body.pwd, user.pwd, (err, result) => {
                if(err || result != true){
                    res.status(401).json({message:"Wrong password or username", data: err});
                    return;
                }
                const token = jwt.sign({name:user.name, lvl:user.lvl}, secretKey, { expiresIn: '3h'});
                res.json({message: 'Logged in', data: token});
            });

        })
        .catch(err=>{
            res.status(400).json({message:"Wrong password or username", data: err});
        });

});

module.exports = router;