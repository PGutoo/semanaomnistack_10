const mongoose = require('mongoose');

const PointSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['Point'],
        required: true,
    },
    coordinate: {
        type: [Number],
        required: true,
    },
});
module.exports = PointSchema