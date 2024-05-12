const mongoose = require('mongoose')
const { Schema, model } = mongoose;
const UserSchema = new Schema({
    Name: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true,
    },
    Password: {
        type: String,
        required: true,
        // minLength: 6
    },
    Profile: {
        type: String,
        required: false,
        // minLength: 6
    },
    Role: {
        type: String,
        required: false,
        default: false

    },
    Status: {
        type: String,
        required: false,
        default: "Active",
        enum: ["Active", "Pending", "Blocked"]
    },
    Date: {
        type: Date,
        required: false,
        default: new Date(Date.now())
    }
})
const UserModel = model('user', UserSchema)

module.exports = UserModel