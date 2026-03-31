import { v2 as cloudinary } from "cloudinary"
import Song from "../models/Song.js";
import fs from "fs"
import path from "path"

const addSong = async (req, res) => {
    try {
        const { name, desc, album } = req.body;
        const audioFile = req.files.audio[0];
        const imageFile = req.files.image[0];

        // Upload files to Cloudinary
        const audioUpload = await cloudinary.uploader.upload(audioFile.path, { 
            resource_type: "video",
            folder: "spotify-songs"
        });
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, { 
            resource_type: "image",
            folder: "spotify-images"
        });

        const duration = `${Math.floor(audioUpload.duration / 60)}:${Math.floor(audioUpload.duration % 60)}`;

        const songData = {
            name,
            desc,
            album,
            image: imageUpload.secure_url,
            file: audioUpload.secure_url,
            duration
        }

        const song = Song(songData);
        await song.save();

        // Clean up uploaded files from local storage
        fs.unlinkSync(audioFile.path);
        fs.unlinkSync(imageFile.path);

        res.status(201).json({ success: true, message: "Song Added" })

    } catch (error) {
        console.log('Failed at addSong, ', error);
        
        // Clean up files if upload failed
        if (req.files?.audio?.[0]?.path) {
            try { fs.unlinkSync(req.files.audio[0].path); } catch (e) {}
        }
        if (req.files?.image?.[0]?.path) {
            try { fs.unlinkSync(req.files.image[0].path); } catch (e) {}
        }
        
        res.status(400).json({ 
            success: false, 
            message: "Song Add Failed!!!!",
            error: error.message 
        })
    }
}

const listSong = async (req, res) => {
    try {
        const allSongs = await Song.find({});
        res.status(201).json({ success: true, songs: allSongs });
    } catch (error) {
        console.log('Failed at listSong, ', error);
        res.status(400).json({ success: false, message: "Song List Failed" })
    }
}

const removeSong = async (req, res) => {
    try {
        const { id } = req.params;
        await Song.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Song removed success" });
    } catch (error) {
        console.log('Failed at removeSong, ', error);
        res.status(400).json({ success: false, message: "Song removed Failed" })
    }
}

export { addSong, listSong, removeSong }