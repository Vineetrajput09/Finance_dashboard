const Record = require("../models/Record");

//Create

exports.createRecord = async (req, res) => {
    const record = await Record.create({
        ...req.body,
        createBy: req.user.id,
    });
    res.json(record);
};

//Get (Pagination + Search + Filter)
exports.getRecords = async (req, res) => {
    const { page = 1, limit = 10, type, category, search } = req.query;
    
    let filter = { isDeleted: false };

    if (type) {
        filter.type = type;
    }
    if (category) {
        filter.category = category;
    }

    if(search) {
        filter.$or = [
            { note: { $regex: search, $options: "i" } },
            { category: { $regex: search, $options: "i" } },
        ];
    }

    const records = await Record.find(filter)
    .skip((page - 1) * limit)
    .limit(Number(limit))
    .sort({ createdAt: -1 });

    const total = await Record.countDocuments(filter);

    res.json({
        total,
        page: Number(page),
        pages: Math.ceil(total / limit),
        data: records,
    });
};

//Update

exports.updateRecord = async (req, res) => {
    const record = await Record.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: ture }
    );
    res.json(record);
};

//Soft Delete

exports.deleteRecord = async(req, res) => {
    await Record.findByIdAndUpdate(req.params.id, {
        isDeleted: true,
    });
    res.json({ message: "Record deleted "});
};