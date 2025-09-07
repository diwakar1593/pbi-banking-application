const jwt = require("jsonwebtoken")
const jwt_secret = "!@#$%^&*#$%^&*"
class JWTService{

    static GenerateToken(user){
        const token = jwt.sign({user},jwt_secret,{
            algorithm:'HS256',
            expiresIn:'1d'
        })
        return token
    }
    static ValidateToken(token){
        const data = jwt.verify(token,jwt_secret)
        return data
    }
}

module.exports = JWTService