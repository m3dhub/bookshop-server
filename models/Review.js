const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    bookId: mongoose.Schema.Types.ObjectId,
    userId: mongoose.Schema.Types.ObjectId,
    review: String
});

module.exports = mongoose.model('Review', reviewSchema);
