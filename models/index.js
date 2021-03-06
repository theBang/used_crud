const mongoose = require('mongoose');
//const { dbConfig } = require('../config.json');

mongoose.Promise = global.Promise;

let User;

(async () => {
    try {
        const conn = await mongoose.createConnection(
            'mongodb+srv://s', { 
                useNewUrlParser: true,
                useUnifiedTopology: true 
            }
        );
        const UserSchema = new mongoose.Schema({
            login: {
                type: String,
                unique: true
            },
            password: {
                type: String
            }
        });
    
        User = conn.model('User', UserSchema);  
    } catch (error) {
        console.log(error);
    }   
})();

module.exports = {
    User
};