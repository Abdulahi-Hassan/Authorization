const { UserValidation, EmailValidation, PasswordValidation, MatchpassValidation } = require('../model/Validation')
const bcrypt = require('bcryptjs')
let jwt = require('jsonwebtoken')
const UserModel = require('../model/User-Model')
require('dotenv').config()
const SignUp = async (req, res) => {
    try {

        const { Name, Email, Password, Status } = req.body;
    
        let { error } = UserValidation(req.body)
        if (error) return res.status(200).json(error.message)
        // Create HashPassword and salt
        const salt = await bcrypt.genSalt(10)
        const HashPassword = await bcrypt.hash(Password, salt)
        // Create NewUse
        let NewUser = new UserModel({ Name, Email, Password: HashPassword, Status })
        if(req.file){
            NewUser.Profile=req.file.filename
        }
        const UserExist = await UserModel.findOne({ Email })
        if (UserExist) return res.status(200).json("User Already Exist")
        let info = await NewUser.save()
        res.status(201).json({ status: "Success", message: "Successfully Inserted NewUser", info })
    } catch (error) {
        res.send(error.message)
    }
}
const SignIn = async (req, res) => {
    let { Email, Password } = req.body;
    //Check Email and Password Exist
    let { error } = EmailValidation({ Email })
    if (error) return res.status(200).json(error.message)
    let { error: single } = PasswordValidation({ Password })
    const UserExist = await UserModel.findOne({ Email })
    if (!UserExist) return res.status(200).json("User not found")
    if (single) return res.status(200).json(single.message)
    const ispasswordcorrect = await bcrypt.compare(Password, UserExist.Password)
    if (!ispasswordcorrect) return res.status(200).json("Incorrect Password")
    // Create Token
    let token = jwt.sign({ id: UserExist._id, Role: UserExist.Role }, process.env.token, { expiresIn: "20s" })

    let { id, Role } = UserExist
    res.cookie("token", token, {
        httpOnly: true,
        path: '/',
        expires: new Date(Date.now() + 1000 * 30),
        sameSite: "lax"
    })

    res.status(200).json({ status: "Success", message: "Successfully Logged In", token,UserExist })

}

const Change = async (req, res) => {
    let { Email, Password, Confirm } = req.body;

    let { error } = EmailValidation({ Email })
    if (error) return res.status(200).json(error.message)
    let { error: single } = MatchpassValidation({ Password ,Confirm})
    //Check Email and Password Exist
    const UserExist = await UserModel.findOne({ Email })
    if (!UserExist) return res.status(200).json("User not found")
    if (single) return res.status(200).json(single.message)

    if (Password !== Confirm || Confirm !== Password) return res.status(200).json( "Please Match the Passwrod Correct" )
    let salt = await bcrypt.genSalt(10)
    let info = await UserModel.findByIdAndUpdate(UserExist._id, {
        Password: await bcrypt.hash(Password, salt)
    }, { new: true })
    await info.save()
    res.status(200).json({ status: "Success", message: "Successfully Change Password" })

}

const Profile=async(req,res)=>{
    const {Name}=req.body
    let {id}=req.params
    let EditPro=await UserModel.findByIdAndUpdate(id,{Name},{new:true})
    if(req.file){
        EditPro.Profile=req.file.filename
    }
   await EditPro.save()
    res.status(200).json({status:"Success",message:"Successfully Update Profile",EditPro})
}



module.exports = { SignIn, SignUp, Change,Profile }