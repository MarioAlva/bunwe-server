const mysql = require('mysql');

//Credenciales de la base de datos
const config = {
    host: 'localhost',
    user: 'root',
    password: '2i0y5Gj5$A^ZTOrmw2CC9T4%4BG6BsPw!P5b0%CtrQes@DE@XL',
    database: 'api',
    dialect: 'mysql',
    dialectOptions: {
        supportBigNumbers: true
      },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};

// export connection
module.exports = config;