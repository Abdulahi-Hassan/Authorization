require('dotenv').config()
let jwt = require('jsonwebtoken')
const VerifyToken = (req, res, next) => {
    // Cookie Header
    // let cookies = req.headers.cookie && req.headers.cookie.split("=")[1]
    // if (!cookies) return res.status(404).json({ message: "Token not found" })
    // jwt.verify(cookies, process.env.token, (err, user) => {
    //     if (err) return res.status(404).json({ message: "invalid token" })
    //     req.user = user
    //     next()
    // })


    //authorization header

    // let authorization = req.headers.authorization && req.headers.authorization.split(" ")[1];
    // if (!authorization) return res.status(404).json({ message: "Token not found" })
    // jwt.verify(authorization, process.env.token, (err, user) => {
    //     if (err) return res.status(404).json({ message: "invalid token" })
    //     req.user = user
    //     next()
    // })


    //token header

    let token = req.headers.token
    if (!token) return res.status(404).json({ message: "Token not found" })
    jwt.verify(token, process.env.token, (err, user) => {
        if (err) return res.status(404).json({ message: "invalid token" })
        req.user = user
        next()
    })
}
const UserAthorization = (req, res, next) => {
    VerifyToken(req, res, () => {
        const { id, Role } = req.user
        if (id && Role==="false") {
            next()
        } else {
            return res.status(404).json({ message: "You are not User Switch Admin user " })

        }
       
    })
}

const AdminAthorization = (req, res, next) => {
    VerifyToken(req, res, () => {
        const { Role} = req.user
        if (Role==='true') {
            next()
        }
        else {
            return res.status(404).json({ message: "You are not Admin Please Contuct Admin user " })

        }
    })
}
module.exports = { UserAthorization, AdminAthorization }