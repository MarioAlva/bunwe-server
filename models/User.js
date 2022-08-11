module.exports = (sequelize, DataTypes) =>{
        const User = sequelize.define('users', {
        name: DataTypes.STRING,
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        email: DataTypes.STRING,
        age: DataTypes.INTEGER,
        location: DataTypes.STRING
    }, { timestamps: false });
    return User;
}
