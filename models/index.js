const mongoose = require('mongoose');
//const { dbConfig } = require('../config.json');

mongoose.Promise = global.Promise;

let User;

(async () => {
    try {
        const conn = await mongoose.createConnection(
            'mongodb+srv://user_admin:12345@cluster0-uxb4t.mongodb.net/userdb', 
            { 
                useNewUrlParser: true,
                useUnifiedTopology: true 
            }
        );
        User = require('./user')(mongoose, conn).find({});
    } catch (error) {
        console.log(error);
    }   
})();

exports.User = User;