const db = require('../db');

exports.createUser = async (email, hash) => {
    return db.query('INSERT INTO users(email, password_hash) VALUES($1, $2) RETURNING *', [email, hash]);
};

exports.findUserByEmail = async (email) => {
    return db.query('SELECT * FROM users WHERE email = $1', [email]);
};