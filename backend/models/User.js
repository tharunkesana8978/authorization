const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: { type: String, required: [true, "Name is required"] },
    email: { type: String, unique: true, required: [true, "Email is required"] },
    password: { type: String, required: [true, "Password is required"] },
    role: {
        type: String,
        enum: ["Admin", "Manager", "Employee"],
        default: "Employee",
        required: true,
    },
    department: { type: String },
}, { timestamps: true });

module.exports = mongoose.model("User", UserSchema);
