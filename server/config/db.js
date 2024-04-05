const { default: mongoose } = require('mongoose');

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.DATABASE_SERVER_URL)
            .then(() => {
                console.log('Connected to the database...')
            })
    } catch (error) {
        console.log(`Error connecting to MongoDB: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;

