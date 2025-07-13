const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: 'uploads/videos/',
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const videoFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('video/')) {
    cb(null, true);
  } else {
    cb(new Error('Only video files are allowed'), false);
  }
};

const upload = multer({
  storage,
  fileFilter: videoFilter
 // limits: { fileSize: 500 * 1024 * 1024 } // 500MB limit
});

module.exports = upload;
