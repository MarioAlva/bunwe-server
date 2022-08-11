const express = require('express');
const cors = require('cors');
const Users = require('./api/users');

const app = express();

const port = process.env.PORT || 5432;
const corsOptions = {
    origin: 'http://localhost:5433',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors(corsOptions));

//https://bunwe-api.herokuapp.com/

app.use('/api/users', Users);

app.get('/', (req, res) => {
    res.json({'message': 'Welcome to the Bunwe API'});
});

app.listen(port, () => {
    console.log('Server running on port ' + port);
});