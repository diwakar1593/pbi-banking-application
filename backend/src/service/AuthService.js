const { UserModel } = require( "../models/User.model" )
const ApiError = require( "../utils/ApiError" )

class AuthService{
    static loginUser(body){
        return {
            msg:"Login Route"
        }
    }


    static async registerUser(body){

        const {name, email, password, ac_type} = body

        const check_exist = await UserModel.findOne({email:email.toLowerCase()})
        if(check_exist){
            throw new ApiError(400,"Email Already Exists")
        }
            
            const user = await UserModel.create({
                name, email, password, ac_type
            })
            return user
    }
}

module.exports = AuthService