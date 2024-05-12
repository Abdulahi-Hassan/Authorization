let jwt = require('jsonwebtoken')
require('dotenv').config()
const RefreshToken = (req, res, next) => {

    // Cookie Refresh
    // let prevcookies = req.headers.cookie && req.headers.cookie.split("=")[1]
    // if (!prevcookies) return res.status(404).json({ message: "Token not found" })
    // jwt.verify(prevcookies, process.env.token, (err, user) => {
    //     if (err) return res.status(404).json({ message: "invalid token" })
    //     res.clearCookie([user.id, user.Role]) //clear prevtoken
    //     //Create Refreshtoken
    //     let token = jwt.sign({ id: user.id, Role: user.Role }, process.env.token, { expiresIn: "60s" })
    //     res.cookie([user.id, user.Role], token, {
    //         path: '/',
    //         expires: new Date(Date.now() + 1000 * 35),
    //         httpOnly: true,
    //         sameSite: "lax"
    //     })
    //     req.user = user
    //     next()
    // })
}
module.exports = RefreshToken