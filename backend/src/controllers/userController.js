const status = require('http-status');

const User = require('../models/User.js');


const has = require('has-keys');


module.exports = {
    async getUserById(req, res) {
        if (!has(req.params, 'id'))
            throw { code: status.BAD_REQUEST, message: 'You must specify the id' };

        let { id } = req.params;

        const userId = req.params.id;
        const userInDB = await User.findById(userId);


        if (!userInDB)
            throw { code: status.BAD_REQUEST, message: 'User not found' };

        return res.json(userInDB)
    }
}
