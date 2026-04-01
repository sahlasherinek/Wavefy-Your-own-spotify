// import { v2 as cloudinary } from "cloudinary"
// import Album from "../models/Album.js";
// import Song from './../models/Song.js';
// import fs from "fs"

// const addAlbum = async (req, res) => {
//     try {
//         const { name, desc, bgColour } = req.body;
//         const imageFile = req.file;

//         if (!imageFile) {
//             return res.status(400).json({ 
//                 success: false, 
//                 message: "Image file is required" 
//             });
//         }

//         // Upload image to Cloudinary
//         const imageUpload = await cloudinary.uploader.upload(imageFile.path, { 
//             resource_type: "image",
//             folder: "spotify-albums"
//         });

//         const albumData = {
//             name,
//             desc,
//             bgColour,
//             image: imageUpload.secure_url,
//         }

//         const album = Album(albumData);
//         await album.save();

//         // Clean up uploaded file from local storage
//         fs.unlinkSync(imageFile.path);

//         res.status(201).json({ success: true, message: "Album Added" })

//     } catch (error) {
//         console.log('Failed at addAlbum, ', error);
        
//         // Clean up file if upload failed
//         if (req.file?.path) {
//             try { fs.unlinkSync(req.file.path); } catch (e) {}
//         }
        
//         res.status(400).json({ 
//             success: false, 
//             message: "Album Add Failed",
//             error: error.message 
//         })
//     }
// }

// const listAlbum = async (req, res) => {
//     try {
//         const allAlbums = await Album.find({});
//         res.status(201).json({ success: true, albums: allAlbums });
//     } catch (error) {
//         console.log('Failed at listAlbum, ', error);
//         res.status(400).json({ success: false, message: "Album List Failed" })
//     }
// }

// const removeAlbum = async (req, res) => {
//     try {
//         const { id } = req.params;

//         const album = await Album.findOne({ _id: id });
//         console.log('album', album)
//         const albumSongs = await Song.find({ album: album.name })
//         albumSongs.map(async (item) => {
//             await Song.findByIdAndDelete(item._id)
//         })
//         await Album.findByIdAndDelete(id);
//         res.status(200).json({ success: true, message: "Album removed success" });
//     } catch (error) {
//         console.log('Failed at removeAlbum, ', error);
//         res.status(400).json({ success: false, message: "Album removed Failed" })
//     }
// }

// export { addAlbum, listAlbum, removeAlbum }

import { v2 as cloudinary } from "cloudinary";
import Album from "../models/Album.js";
import Song from "./../models/Song.js";

const addAlbum = async (req, res) => {
    try {
        const { name, desc, bgColour } = req.body;
        const imageFile = req.file;

        if (!imageFile) {
            return res.status(400).json({
                success: false,
                message: "Image file is required"
            });
        }

        // Convert buffer to base64 data URI and upload directly to Cloudinary
        const imageBase64 = `data:${imageFile.mimetype};base64,${imageFile.buffer.toString('base64')}`;

        const imageUpload = await cloudinary.uploader.upload(imageBase64, {
            resource_type: "image",
            folder: "spotify-albums"
        });

        const albumData = {
            name,
            desc,
            bgColour,
            image: imageUpload.secure_url,
        };

        const album = Album(albumData);
        await album.save();

        res.status(201).json({ success: true, message: "Album Added" });

    } catch (error) {
        console.log('Failed at addAlbum, ', error);
        res.status(400).json({
            success: false,
            message: "Album Add Failed",
            error: error.message
        });
    }
};

const listAlbum = async (req, res) => {
    try {
        const allAlbums = await Album.find({});
        res.status(201).json({ success: true, albums: allAlbums });
    } catch (error) {
        console.log('Failed at listAlbum, ', error);
        res.status(400).json({ success: false, message: "Album List Failed" });
    }
};

const removeAlbum = async (req, res) => {
    try {
        const { id } = req.params;

        const album = await Album.findOne({ _id: id });
        const albumSongs = await Song.find({ album: album.name });

        await Promise.all(albumSongs.map((item) => Song.findByIdAndDelete(item._id)));

        await Album.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Album removed success" });
    } catch (error) {
        console.log('Failed at removeAlbum, ', error);
        res.status(400).json({ success: false, message: "Album removed Failed" });
    }
};

export { addAlbum, listAlbum, removeAlbum };