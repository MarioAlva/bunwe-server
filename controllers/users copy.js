const User = require('../models/User');

const findAllUsers = async (req, res) => {
    let users = await User.findAll({})
    res.status(200).send(users);
};
const findById = async (req, res) => {
    let id = req.params.id;
    let users = User.findOne({ where: { id: id } });
    res.status(200).send(users);
};

const addUser = async (req, res) => {
    let user = {
        id: Date.now(),
        name: req.body.name,
        username: req.body.username,
        password: req.body.password
    };
    
    const adduser = await User.create(user);
    res.status(200).send(adduser);
    console.log(adduser);
};

module.exports = { findAllUsers, findById, addUser};