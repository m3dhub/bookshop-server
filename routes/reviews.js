const express = require('express');
const router = express.Router();
const Review = require('../models/Review');
const auth = require('../middleware/auth');

// Task 5: Get book Review
router.get('/:bookId', async (req, res) => {
    const reviews = await Review.find({ bookId: req.params.bookId });
    res.json(reviews);
});

// Task 8: Add/Modify a book review (requires authentication)
router.post('/', auth, async (req, res) => {
    const { bookId, review } = req.body;
    const existingReview = await Review.findOne({ bookId, userId: req.user.id });
    if (existingReview) {
        existingReview.review = review;
        await existingReview.save();
    } else {
        await Review.create({ bookId, userId: req.user.id, review });
    }
    res.status(200).json({ message: 'Review saved successfully' });
});

// Task 9: Delete book review added by that particular user (requires authentication)
router.delete('/:id', auth, async (req, res) => {
    const review = await Review.findById(req.params.id);
    if (review && review.userId.toString() === req.user.id) {
        await review.delete();
        res.status(200).json({ message: 'Review deleted successfully' });
    } else {
        res.status(403).json({ message: 'Unauthorized' });
    }
});

module.exports = router;
