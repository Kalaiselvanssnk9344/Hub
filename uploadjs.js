const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set storage engine
const storage = multer.diskStorage({
    destination: './uploads/',
    filename: (req, file, cb) => {
        cb(null, ${file.fieldname}-${Date.now()}${path.extname(file.originalname)});
    }
});

// Initialize upload
const upload = multer({
    storage: storage,
    limits: { fileSize: 1000000 }, // 1MB file size limit
}).single('certificate');

// Serve static files from "public" directory
app.use(express.static('./public'));

// Handle file upload
app.post('/upload', (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            res.status(400).send('Error: ' + err.message);
        } else {
            if (req.file == undefined) {
                res.status(400).send('Error: No file selected');
            } else {
                res.send(File uploaded successfully! <a href="/uploads/${req.file.filename}" download>Download it</a>);
            }
        }
    });
});

// Serve uploaded files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Start server
app.listen(PORT, () => console.log(Server running on http://localhost:${PORT}));