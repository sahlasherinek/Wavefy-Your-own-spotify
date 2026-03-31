import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const uri = "mongodb+srv://aiisgoodforyou:wxXnthqKr1ApKikI@cluster0.yhgf62s.mongodb.net/spotify?retryWrites=true&w=majority";
        console.log('Connecting to MongoDB with hardcoded URI');
        await mongoose.connect(uri);
        console.log('MongoDB connection has been established!')
    } catch (error) {
        console.log('MongoDB connection has failed', error.message);
    }
}

export default connectDB;