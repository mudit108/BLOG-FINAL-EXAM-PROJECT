const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://mudit108dayma:12345@blog-users.a2gj9wk.mongodb.net/?retryWrites=true&w=majority&appName=blog-users')
        console.log('MongoDB connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
