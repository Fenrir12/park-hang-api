const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const userModel = require('../models/userModel');

exports.register = async (req, res) => {
    const { email, password } = req.body;
    const hash = await bcrypt.hash(password, 10);
    const result = await userModel.createUser(email, hash);
    res.json(result.rows[0]);
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    const result = await userModel.findUserByEmail(email);
    const user = result.rows[0];
    if (!user || !(await bcrypt.compare(password, user.password_hash))) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
    res.json({ token });
};