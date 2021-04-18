const status = require('http-status');

const Comment = require('../models/Comment.js');
const User = require('../models/User.js');


const has = require('has-keys');


module.exports = {
    async getComments(req, res) {
        const { ownerEmail } = req.query;

        const query = {};
        let optionalOwners = [];

        if (ownerEmail) {
            optionalOwners = await User.find({ email: { $regex: ownerEmail + '.*' } }).limit(5);
            query.user = { $in: optionalOwners }
        }

        const commentsInDB = await Comment.find(query).populate('user');

        return res.json(commentsInDB)

    },

    async createComment(req, res) {
        if (!has(req.body, 'email'))
            throw { code: status.BAD_REQUEST, message: 'Comment must include the email adress of the sender' };

        if (email.length === 0)
            throw { code: status.BAD_REQUEST, message: 'Email address cannot be empty ' };

        if (!has(req.body, 'message'))
            throw { code: status.BAD_REQUEST, message: 'Comment must include a message' };

        if (email.message === 0)
            throw { code: status.BAD_REQUEST, message: 'Message cannot be empty ' };

        const { email, message } = req.body;
        let userInDB = await User.findOne({ email });

        if (!userInDB) {
            userInDB = await new User({ email });
            await userInDB.save();
        }

        const now = Date.now();

        await userInDB.update({ lastActiveAt: now });

        const newComment = await new Comment({ message, user: userInDB, createdAt: now });
        await newComment.save()

        return res.json(newComment);
    }
}
