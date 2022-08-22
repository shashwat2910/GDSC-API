const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    name: {
        type: String
    },
    codeLang: {
        type: String
    },
    class: {
        type: String,
        require: true
    },
    department: {
        type: String,
        require: true
    },
    domains: [],
    interests: [],
    socialMedia: [],
    event: {
        type: String,
        require: true
    },
    question: {
        type: String,
        require: true
    },
    codingSkills: {
        type: Number,
        require: true
    }
})

const User = mongoose.model("gdsc", UserSchema)

module.exports = User