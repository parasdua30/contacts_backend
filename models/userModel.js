const mongoose = require("mongoose");

const userScehma = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Enter your Username"],
        },
        email: {
            type: String,
            required: [true, "Enter your email"],
            unique: [true, "Email address already taken"],
        },
        password: {
            type: String,
            required: [true, "Enter your password"],
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("User", userScehma);
