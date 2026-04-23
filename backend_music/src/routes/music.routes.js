const express = require("express");
const multer = require("multer")
const musicController = require("../controller/music.controller")
const authMiddleware = require("../middlewares/auth.middlewares")
const router = express.Router();


const upload = multer({
    storage:multer.memoryStorage()
})

router.post('/musicpost',authMiddleware.authArtist ,upload.single("music") ,musicController.musicPost)
router.post('/albumpost',authMiddleware.authArtist ,musicController.albumPost)
router.get('/', authMiddleware.authUser ,musicController.getAllmusic)
router.get('/album', authMiddleware.authUser ,musicController.getAllalbum)
router.get('/album', authMiddleware.authUser ,musicController.getAllalbum)
router.get('/album/:albumId', authMiddleware.authUser ,musicController.getAllalbumId)





module.exports = router