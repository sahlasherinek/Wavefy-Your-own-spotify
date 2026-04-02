<!-- 
# Spotify Clone

A fully functional Spotify clone built with React, Node.js, Express.js and MongoDB. This project aims to replicate the core functionalities of Spotify, allowing users to browse albums, play songs, and manage playback. 
It includes functionalities for creating, browsing, and removing albums, as well as uploading, viewing, and deleting songs.

## Features

- **Album Management**: Create, list, and delete albums.
- **Song Management**: Upload, list, and delete songs.
- **Play Music**: Users can play, pause, and skip tracks.
- **Responsive Design**: Mobile-friendly design for better accessibility.

## Technologies Used

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Cloud Storage**: Cloudinary for image and song storage
- **Tools:** Git, Vite, VSCode
- **State Management**: Context API
- **Other Libraries**: Axios, React Router, React Toastify

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/nuricanbrdmr/Spotify-Clone-MERN-Website.git
    cd Spotify-Clone-MERN-Website
    ```

2. Set up environment variables:
    Create a `.env` file in the root directory and add the following:
    ```plaintext
    MONGO_URI=your_mongodb_uri
    CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
    CLOUDINARY_API_KEY=your_cloudinary_api_key
    CLOUDINARY_API_SECRET=your_cloudinary_api_secret
    ```

3. Run the backend server:
    ```bash
    cd spotify-backend
    npm install
    npm start
    ```
4. Run the backend server:
    ```bash
    cd spotify-admin
    npm install
    npm run dev
    ```

5. Run the frontend:
    ```bash
    cd spotify-frontend
    npm install
    npm run dev
    ```

## Usage

1. Open your browser and navigate to `http://localhost:5173`.
2. Create new albums and songs on the Spotify Admin page.
3. Browse albums and songs, create playlists, and enjoy music.

## Screenshot

### Admin Add Song Page
![Screenshot_1](https://github.com/user-attachments/assets/a6068724-71a5-49ef-99d7-419c215f94ae)

### Admin Song List Page
![Screenshot_2](https://github.com/user-attachments/assets/5ffb918c-27ec-4db5-8855-81b83d1d5725)

### Home Page
![Screenshot_3](https://github.com/user-attachments/assets/b4ead4c4-d267-495a-ab57-7f9c5006b340)

### Album Page
![Screenshot_4](https://github.com/user-attachments/assets/33e1dcdb-f794-4b1e-82cc-3c588c4b23c1)

## References

I used [GreatStack YouTube channel](https://www.youtube.com/@GreatStackDev) to develop this project. Thank you for the useful content. -->
<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Righteous&size=50&duration=3000&pause=1000&color=1DB954&center=true&vCenter=true&width=600&lines=%F0%9F%8E%B5+WAVEFY;Your+Own+Spotify" alt="Wavefy" />

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
</p>

<p align="center">
  <a href="https://wavefy-your-own-spotify.vercel.app/" target="_blank">
    <img src="https://img.shields.io/badge/🎧 Live Demo-1DB954?style=for-the-badge&logoColor=white" alt="Live Demo" />
  </a>
  <a href="https://wavefy-your-own-spotify-y2p2.vercel.app/" target="_blank">
    <img src="https://img.shields.io/badge/⚙️ Admin Panel-FF6B35?style=for-the-badge&logoColor=white" alt="Admin Panel" />
  </a>
  <a href="https://wavefy-backend-akfh.onrender.com" target="_blank">
    <img src="https://img.shields.io/badge/🚀 Backend API-4A90D9?style=for-the-badge&logoColor=white" alt="Backend API" />
  </a>
  <a href="https://github.com/sahlasherinek/Wavefy-Your-own-spotify" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  </a>
</p>

</div>

---

## 🎵 What is Wavefy?

**Wavefy** is a full-stack music streaming web application inspired by Spotify. It lets you stream music, browse albums, and manage your entire music library — all from a sleek, dark-themed interface. Built with the MERN stack and deployed on Vercel + Render.

> *"Your music. Your platform. Your Wavefy."*

---

## 🖥️ Screenshots

### 🏠 Home — Browse Albums & Songs
![Home Page](https://github.com/sahlasherinek/Wavefy-Your-own-spotify/raw/main/screenshots/hf.png)

### 🎶 Album View — Playlist & Player
![Album View](https://github.com/sahlasherinek/Wavefy-Your-own-spotify/raw/main/screenshots/af.png)

### ⚙️ Admin — Add Song
![Add Song](https://github.com/sahlasherinek/Wavefy-Your-own-spotify/raw/main/screenshots/add_song.png)

### 📀 Admin — Add Album
![Add Album](https://github.com/sahlasherinek/Wavefy-Your-own-spotify/raw/main/screenshots/add_album.png)

### 📋 Admin — List Songs
![List Songs](https://github.com/sahlasherinek/Wavefy-Your-own-spotify/raw/main/screenshots/List_Songs.png)

### 📋 Admin — List Albums
![List Albums](https://github.com/sahlasherinek/Wavefy-Your-own-spotify/raw/main/screenshots/List_albums.png)

---

## ✨ Features

### 🎧 User (Frontend)
- 🎵 Stream songs with a fully functional music player
- ⏮️ Play, Pause, Next, Previous track controls
- 🔀 Shuffle and 🔁 Loop modes
- 🔊 Volume control with Mute toggle
- 📊 Seekable progress bar
- 📁 Browse albums and songs
- 📱 Responsive design

### 🛠️ Admin Panel
- ➕ Upload songs with audio file + cover image
- 📀 Create and manage albums
- 🗑️ Delete songs and albums
- ☁️ Automatic upload to Cloudinary

### ⚙️ Backend
- RESTful API with Express.js
- MongoDB database with Mongoose
- Cloudinary integration for media storage
- CORS configured for secure cross-origin requests

---

## 🔗 Live Links

| Service | URL |
|--------|-----|
| 🎧 Frontend | [wavefy-your-own-spotify.vercel.app](https://wavefy-your-own-spotify.vercel.app/) |
| ⚙️ Admin Panel | [wavefy-your-own-spotify-y2p2.vercel.app](https://wavefy-your-own-spotify-y2p2.vercel.app/) |
| 🚀 Backend API | [wavefy-backend-akfh.onrender.com](https://wavefy-backend-akfh.onrender.com) |

---

## 🏗️ Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React 18, Vite, Tailwind CSS |
| Admin Panel | React 18, Vite, Tailwind CSS |
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas, Mongoose |
| Media Storage | Cloudinary |
| State Management | React Context API |
| HTTP Client | Axios |
| Routing | React Router DOM |
| Notifications | React Toastify |
| Deployment | Vercel (Frontend + Admin), Render (Backend) |

---

## 📁 Project Structure

```
Wavefy-Your-own-spotify/
│
├── spotify-frontend/          # User-facing React app
│   ├── src/
│   │   ├── components/        # Player, Sidebar, Navbar, etc.
│   │   ├── context/           # PlayerContext (global state)
│   │   └── assets/
│   └── vercel.json
│
├── spotify-admin/             # Admin panel React app
│   ├── src/
│   │   ├── pages/             # AddSong, AddAlbum, ListSong, ListAlbum
│   │   ├── components/        # Sidebar, Navbar
│   │   └── config.js          # Backend URL config
│   └── vercel.json
│
└── spotify-backend/           # Node.js + Express API
    ├── src/
    │   ├── controllers/       # songController, albumController
    │   ├── models/            # Song, Album schemas
    │   ├── routes/            # songRoute, albumRoute
    │   ├── middleware/        # multer (memory storage)
    │   └── config/            # MongoDB, Cloudinary setup
    └── server.js
```

---

## 🚀 Run Locally

### Prerequisites
- Node.js v18+
- MongoDB Atlas account
- Cloudinary account

### 1. Clone the repository
```bash
git clone https://github.com/sahlasherinek/Wavefy-Your-own-spotify.git
cd Wavefy-Your-own-spotify
```

### 2. Setup Backend
```bash
cd spotify-backend
npm install
```

Create a `.env` file inside `spotify-backend/`:
```env
MONGODB_URI=your_mongodb_connection_string
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
FRONTEND_URL=http://localhost:5173
ADMIN_URL=http://localhost:5174
```

```bash
npm start
```

### 3. Setup Admin Panel
```bash
cd spotify-admin
npm install
```

Create a `.env` file inside `spotify-admin/`:
```env
VITE_BACKEND_URL=http://localhost:4000
```

```bash
npm run dev
```

### 4. Setup Frontend
```bash
cd spotify-frontend
npm install
```

Create a `.env` file inside `spotify-frontend/`:
```env
VITE_BACKEND_URL=http://localhost:4000
```

```bash
npm run dev
```

### 5. Open in browser

| App | URL |
|-----|-----|
| Frontend | http://localhost:5173 |
| Admin | http://localhost:5174 |
| Backend | http://localhost:4000 |

---

## 🌐 Deployment

| Service | Platform | Notes |
|---------|----------|-------|
| Frontend | Vercel | Auto-deploys on push |
| Admin Panel | Vercel | Auto-deploys on push |
| Backend | Render | Web Service, Node runtime |
| Database | MongoDB Atlas | Free tier M0 cluster |
| Media | Cloudinary | Free tier |

---

## 📌 Acknowledgements

- 🎬 Tutorial inspiration: [Great Stack](https://www.youtube.com/@GreatStackDev) on YouTube
- 🍴 Original repository: [nuricanbrdmr/Spotify-Clone-MERN-Website](https://github.com/nuricanbrdmr/Spotify-Clone-MERN-Website)
- 🛠️ Extended and deployed independently with the following modifications:
  - Migrated file uploads from disk storage to memory storage for cloud deployment
  - Fixed CORS configuration for multi-service deployment
  - Configured environment variables across frontend, admin, and backend
  - Deployed on Vercel (frontend + admin) and Render (backend)
  - Added shuffle, loop, volume control and mute features

---

## 👩‍💻 Author

<div align="center">

**SAHLA SHERIN E K**

[![GitHub](https://img.shields.io/badge/GitHub-sahlasherinek-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/sahlasherinek)

*Computer Science Engineering Graduate — GEC Wayanad*

</div>

---

<div align="center">

⭐ **If you liked this project, give it a star!** ⭐

Made with ❤️ and 🎵 by Sahla Sherin E K
</div>