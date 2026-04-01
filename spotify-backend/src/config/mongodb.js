import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB connection has been established!');
    } catch (error) {
        console.log('MongoDB connection has failed', error.message);
    }
};

export default connectDB;