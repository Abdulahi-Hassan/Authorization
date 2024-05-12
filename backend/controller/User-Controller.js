const UserModel = require('../model/User-Model')
const bcrypt = require('bcrypt')
const GetAllUser = async (req, res) => {
    let GetAlluser = await UserModel.find()
    res.status(200).json({ GetAlluser })
}
const GetUserID = async (req, res) => {
    let { id } = req.user;
    let GetuserID = await UserModel.findById(id, "-Password")
    res.status(200).json(GetuserID )
}

const UpdateUser = async (req, res) => {
    let { Name, Password, Status, Role } = req.body
    let Edit = await UserModel.findByIdAndUpdate(req.params.id, {
        Name, Status, Role
    }, { new: true })
    if(req.file){
        Edit.Profile=req.file.filename
    }
    if (Edit.Password) {
        let salt = await bcrypt.genSalt(10)
        let hashpass = await bcrypt.hash(Password, salt)
        Edit.Password = hashpass
    }
    let info = await Edit.save()
    res.status(200).json({ status: "Success", message: "Successfully Update Date user", info })

}

const DeleteUser = async (req, res) => {
    let {id}=req.params;
    let Remove=await UserModel.findByIdAndDelete(id)
    if(!Remove) return res.send('')
    res.status(200).json({ status: "Success", message: "Successfully Update Date user", Remove })

}
module.exports = { GetUserID, GetAllUser, UpdateUser, DeleteUser }