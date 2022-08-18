const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    class: {
        type: String,
        require: true
    },
    department: {
        type: String,
        require: true
    },
    domains: [
        {
            domain: {
                type: String,
                require: true
            }
        }
    ],
    interests: [
        {
            interest: {
                type: String,
                require: true
            }
        }
    ],
    socialMedia: {
        type: String,
        require: true
    },
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

const User = mongoose.model("User", UserSchema)

module.exports = User