const jwt = require('jsonwebtoken');
const User = require('../models/user');
const authenticate = (req, res, next) => {

    try {
        const token = req.header('authorization');
        console.log(token);
        const userid = Number(jwt.verify(token, process.env.TOKEN_SECRET));
        User.findByPk(userid).then(user => {
            console.log(JSON.stringify(user));
            req.user = user;
            next();
        }).catch(err => { throw  Error(err) });
    } catch(err) {
        console.log(err);
    }
}
