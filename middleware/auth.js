const jwt = require('jsonwebtoken');
const config = require('../config');

module.exports = (req, res, next) => {
    const token = req.headers['x-access-token'];
    if (!token) return res.status(401).json({ message: 'No token provided' });

    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) return res.status(401).json({ message: 'Failed to authenticate token' });

        req.user = decoded;
        next();
    });
};
