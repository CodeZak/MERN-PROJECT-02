const mongoose = require("mongoose");

const Employee = mongoose.model("Employee", {
    name: {
        type: String,
        required: true,
        trim: true,
    },
    position: {
        type: String,
        required: true,
        trim: true,
    },
    level: {
        type: String,
        required: true,
        trim: true,
    },
});

module.exports = Employee;
