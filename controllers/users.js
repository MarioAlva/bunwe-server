const db = require('../models/init');
const User = db.users;

const findAllUsers = async (req, res) => {
    const users = await User.findAll({});
    res.status(200).send(users);
};

const findById = async (req, res) => {
    let id = req.params.id;
    const users = await User.findOne({where : {id: id}});
    res.status(200).send(users);
};

const addUser = async (req, res) => {
    let user = new User({
        name: req.body.name,
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        age: req.body.age,
        location: req.body.location
    });
    
    user.save((err, data) => {
        err && res.status(500).send(err.message);

        res.status(200).send(data);
    });
};

module.exports = {findAllUsers, findById, addUser};