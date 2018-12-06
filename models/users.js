
const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    pwd: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true
    },
    header: String,
    post: String,
    salary: String,
    company: String,
    info: String
});

//创建模型对象
const users = mongoose.model('users',usersSchema);
module.exports = users;
