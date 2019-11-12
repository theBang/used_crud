module.exports = (mongoose, conn) => {
    const UserSchema = new mongoose.Schema({
        login: {
            type: String,
            unique: true
        },
        password: {
            type: String
        }
    });

    return User = conn.model('User', UserSchema);  
}