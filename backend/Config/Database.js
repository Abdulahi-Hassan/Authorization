const mongoose=require('mongoose')
const multer=require('multer')
require('dotenv').config()
const path=require('path')
exports.DatabaseConnection=mongoose.connect(process.env.mongodb).then(()=>console.log(process.env.mongodbconn))
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
         cb(null,"public/images")
    },
    filename:(req,file,cb)=>{
         let ImageValidation=file.fieldname +"_"+Date.now() + path.extname(file.originalname)
        cb(null,ImageValidation)
    }
})
exports.Upload=multer({
    storage:storage
}).single("Profile")