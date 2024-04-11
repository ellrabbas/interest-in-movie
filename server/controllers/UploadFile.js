const express = require('express');
const multer = require('multer');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const storage = require('../config/firebaseStorage');


const Uploadrouter = express.Router();

const upload = multer({
    storage: multer.memoryStorage(),
});


Uploadrouter.post('/', upload.single('file'), async (req, res) => {

    try {

        const file = req.file;

        if (file) {
            const fileName = `${uuidv4()}${path.extname(file.originalname)}`;

            const blob = storage.file(fileName);
            const blobStream = blob.createWriteStream({
                resumable: false,
                metadata: { contentType: file.mimetype },
            });

            blobStream.on('error', (err) => {
                res.status(400).json({ error: err.message });
            });

            blobStream.on('finish', () => {
                const publicUrl = `https://firebasestorage.googleapis.com/v0/b/${storage.name}/o/${fileName}?alt=media`;

                res.status(200).json(publicUrl);
            });

            blobStream.end(file.buffer);
        } else {
            res.status(400).json({ message: 'Please upload a file' });
        }

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = Uploadrouter;