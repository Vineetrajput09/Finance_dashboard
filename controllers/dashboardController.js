const Record = require("../models/Record");

exports.getSummary = async(req, res) => {
    const income = await Record.aggregate([
        { $match: { type: "income", isDeleted: false } },
        { $group: { _id: null, total: { $sum: "$amount" } } },
    ]);

    const expense = await Record.aggregate([
        { $match: { type: "expense", isDeleted: false } },
        { $group: { _id: null, total: { $sum: "$amount" } } },
    ]);

    res.json({
        totalIncome: income[0]?.total || 0,
        totalExpense: expense[0]?.total || 0,
        net: (income[0]?.total || 0) - (expense[0]?.total || 0),
    });
};