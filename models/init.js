const pool = require('../config/database');
const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(
    pool.database,
    pool.user,
    pool.password, {
        host: pool.host,
        dialect: pool.dialect,
        dialectOptions: {
            supportBigNumbers: true,
        },
        pool: {
            max: pool.pool.max,
            min: pool.pool.min,
            acquire: pool.pool.acquire,
            idle: pool.pool.idle
        }
    }
);

sequelize.authenticate()
.then(() => {
    console.log('Connection has been established successfully.');
}).catch(err => {
    console.error('Unable to connect to the database:', err);
})

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require('./User')(sequelize, DataTypes);

db.sequelize.sync({force: false}).then(() => {
    console.log('Drop and Resync with { force: false }');
});

module.exports = db;