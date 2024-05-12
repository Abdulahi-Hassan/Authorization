
let joi=require('joi')

const UserValidation = (UV) => {
    let uservalidation = joi.object({
        Name: joi.string().required(),
        Email: joi.string().required().email(),
        Password: joi.string().required(),
    })
    return uservalidation.validate(UV)
}
const EmailValidation = (Email) => {
    let Emailvalidation = joi.object({
        Email: joi.string().required().email(),
    })
    return Emailvalidation.validate(Email)
}
const PasswordValidation = (Password) => {
    let Passwordvalidation = joi.object({
        Password: joi.string().required()
    })
    return Passwordvalidation.validate(Password)
}

const MatchpassValidation = (matchpass) => {
    let matchpassvalidation = joi.object({
        Password: joi.string().required(),
        Confirm: joi.string().required()
    })
    return matchpassvalidation.validate(matchpass)
}

module.exports = {UserValidation,EmailValidation,PasswordValidation,MatchpassValidation}