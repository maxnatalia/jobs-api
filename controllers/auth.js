const { StatusCodes } = require('http-status-codes');
const { BadRequestError } = require('../errors');
// const bcrypt = require('bcryptjs');
const User = require('../models/User');

const register = async (req, res) => {
    const user = await User.create({ ...req.body })
    res.send("register")
    res.status(StatusCodes.CREATED).json({ user })
};

const login = async (req, res) => {
    res.send("login user")
};

module.exports = {
    register,
    login,
}