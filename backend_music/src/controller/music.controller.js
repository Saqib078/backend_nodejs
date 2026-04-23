const musicModel = require("../models/music.model")
const jwt = require("jsonwebtoken")
const multer = require("multer")
const uploadFile = require("../services/storage.service");
const albumModel = require("../models/album.model");

async function musicPost(req, res) {
    try {

        const { title } = req.body;
        const file = req.file;
        const result = await uploadFile(file.buffer.toString('base64'))
        console.log(result.url)
        const music = await musicModel.create({
            url: result.url,
            title,
            artist: req.user.id
        })
        res.status(201).json({
            message: "Music create successfully",
            music: {
                id: music._id,
                url: music.url,
                title: music.title,
                artist: music.artist
            }
        })
    }
    catch (err) {
        console.log("error occurs")
        process.exit(1);
    }
}

async function albumPost(req, res) {
    try {
        const { title, music } = req.body;

        const album = await albumModel.create({
            title,
            artist: req.user.id,
            music: music
        })

        res.status(201).json({
            message: "album created successfully",
            album: {
                id: album._id,
                title: album.title,
                artist: album.artist,
                music: album.music
            }
        })
    }
    catch (err) {
        console.log("error occur", err)
        process.exit(1);
    }
}

async function getAllmusic(req,res){
    // const music = await musicModel.find()
    const music = await musicModel.find().populate("artist")// give full details for artist
    // const music = await musicModel.find().populate("artist", "user_email user_name") give the username or useremail details for artist


    res.status(200).json({
        message:"music fetched successfully",
        music:music
    })
}

async function getAllalbum(req,res){
    // const music = await musicModel.find()
    const music = await albumModel.find().populate("artist")// give full details for artist
    // const music = await musicModel.find().populate("artist", "user_email user_name") give the username or useremail details for artist


    res.status(200).json({
        message:"music fetched successfully",
        music:music
    })
}

async function getAllalbumId(req,res){

    const albumId = req.params.albumId;
    // const music = await musicModel.find()
    const music = await albumModel.findById(albumId).populate("artist")// give full details for artist
    // const music = await musicModel.find().populate("artist", "user_email user_name") give the username or useremail details for artist


    res.status(200).json({
        message:"music fetched successfully",
        music:music
    })
}

module.exports = { musicPost, albumPost , getAllmusic , getAllalbum ,getAllalbumId};