const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: {type: String, required: true},
    body: {type: String,  required: true},
    date: {type: String, required: true}
});

module.exports = mongoose.model('Posts', postSchema);

