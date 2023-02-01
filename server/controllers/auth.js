const { connect } = require('getstream');
const bcrypt = require('bcrypt');
const StreamChat = require('stream-chat').StreamChat;
const crypto = require('crypto');
const User = require('../models/User');

require('dotenv').config();

const api_key = process.env.STREAM_API_KEY;
const api_secret = process.env.STREAM_API_SECRET;
const app_id = process.env.STREAM_APP_ID;

const signup = async (req, res) => {
    try {
        const { fullName, username, password, phoneNumber } = req.body;

        const userId = crypto.randomBytes(16).toString('hex');

        const serverClient = connect(api_key, api_secret, app_id);

        const hashedPassword = await bcrypt.hash(password, 10);

        const token = serverClient.createUserToken(userId);

        res.status(200).json({ token, fullName, username, userId, hashedPassword, phoneNumber });
        const user = new User({
            userName: username,
            userId: userId,

        })
        user.save(err => {
            if (err) {
                res.send(err)
            } else {
                res.send({ message: "Successfully Registered" });
            }
        })

    } catch (error) {
        console.log(error);

        res.status(500).json({ message: error });
    }
};

const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        
        const serverClient = connect(api_key, api_secret, app_id);
        const client = StreamChat.getInstance(api_key, api_secret);

        const { users } = await client.queryUsers({ name: username });

        if(!users.length) return res.status(400).json({ message: 'User not found' });

        const success = await bcrypt.compare(password, users[0].hashedPassword);

        const token = serverClient.createUserToken(users[0].id);
        const query = await User.findOne({ 'userName': username })
        const daoCoin = query.daoCoin

        if(success) {
            res.status(200).json({ token, fullName: users[0].fullName, username, userId: users[0].id, daoCoin: daoCoin});
        } else {
            res.status(500).json({ message: 'Incorrect password' });
        }
    } catch (error) {
        console.log(error);

        res.status(500).json({ message: error });
    }
};

const forgotPassword = async (req, res) => {
    try {
        const { username, email } = req.body;
        console.log(username, email)
        res.status(200).json({message: 'Email Sent'})
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
    }
}

module.exports = { signup, login, forgotPassword }