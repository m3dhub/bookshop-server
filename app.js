const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const booksRoutes = require('./routes/books');
const reviewsRoutes = require('./routes/reviews');
const usersRoutes = require('./routes/users');
const config = require('./config');

const app = express();

mongoose.connect(config.database, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());

app.use('/books', booksRoutes);
app.use('/reviews', reviewsRoutes);
app.use('/users', usersRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
