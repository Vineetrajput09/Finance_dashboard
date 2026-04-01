const mongoose = require("mongoose");

const recordSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true,
    },
    type: {
        type: String,
        enum: ["income", "expense"],
        required: true,
    },
    category: String,
    date: {
        type: Date,
        default: Date.now,
    },
    note: String,

    isDeleted: {
        type: Boolean,
        default: false,
    },

    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
},{timestamps: true});

// Index for performance
recordSchema.index({ category: 1, type: 1});

module.exports = mongoose.model("Record", recordSchema);