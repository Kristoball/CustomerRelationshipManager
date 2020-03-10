require('dotenv').config();
let jwt = require("jsonwebtoken");

const secretKey = process.env.secretKey;//fra .env

/** 
 * @class
 * @name Authenticate
 * @description Middleware for basic rights 
**/
class Authenticate {
    lvl = null;

    constructor(lvl){
        this.lvl = lvl;
    }

    //https://www.restapitutorial.com/httpstatuscodes.html
    checkLevel = (req, res, next) => {
        if(!req.headers.token){
            res.status(401).end({message:"Not logged in", data: err});//401 Unauthorized
            return;
        }
        try {
            var decoded = jwt.verify(req.headers.token, secretKey);//secretKey må være i .env
            if(decoded.lvl>this.lvl){
                res.status(405).end({message:"Not authorized for this action, required permission level is "+this.lvl, data: decoded});//405 Method Not Allowed
            }
            req.user = decoded;        
            return next();
        } catch (err){
            res.status(401).end({message:"Not logged in", data: err});//401 Unauthorized
        }
    }
}

/*### Expempel ###*/
//const admin = new Autenticate(1);
//const normalUser = new Authenticate(3);
//get(normalUser.checkLevel, (req, res, next)=>{res.send("hello world")})
/*### End Exempel ###*/

module.exports = Authenticate;