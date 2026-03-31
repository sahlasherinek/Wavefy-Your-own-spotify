# Spotify Clone Backend Setup Guide

## Prerequisites
- Node.js installed
- MongoDB running locally
- Cloudinary account

## Step 1: Install Dependencies
```bash
npm install
```

## Step 2: Set up Cloudinary
1. Go to [Cloudinary Console](https://cloudinary.com/console)
2. Sign up or log in
3. Copy your credentials from the Dashboard

## Step 3: Create Environment File
Create a `.env` file in the `spotify-backend` folder with:

```env
CLOUDINARY_CLOUD_NAME=your_cloud_name_here
CLOUDINARY_API_KEY=your_api_key_here
CLOUDINARY_API_SECRET=your_api_secret_here
MONGODB_URI=mongodb://localhost:27017/spotify-clone
PORT=4000
```

## Step 4: Start MongoDB
Make sure MongoDB is running on your system.

## Step 5: Start the Server
```bash
npm start
```

You should see: "Server started on 4000" and "Cloudinary connected"

## Step 6: Test the API
Visit: http://localhost:4000
You should see: "API Working"

## Troubleshooting

### "Song Add Failed" or "Album Add Failed"
- Check if `.env` file exists and has correct Cloudinary credentials
- Restart the server after creating `.env` file
- Check MongoDB connection

### "Cannot connect to server"
- Make sure backend is running on port 4000
- Check if port 4000 is not used by another process

### File Upload Issues
- Check file size (max 50MB)
- Ensure file types are correct (audio/* for songs, image/* for albums)
