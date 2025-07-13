// const express = require('express');
// const router = express.Router();
// const upload = require('../middleware/uploadMiddleware');
// const { uploadVideo } = require('../controllers/uploadControlers');
// // const { uploadVideo } = require('../../controllers/uploadController');



// router.post(
//   '/video',
//   upload.single('video'),
//   uploadVideo
// );

// module.exports = router;

const express = require('express');
const router = express.Router();
const uploadVideo = require('../middleware/uploadCloudinary');
const { cloudUpload } = require('../controllers/uploadControlers');
//const { cloudUpload } = require('../controllers/uploadController');

router.post('/cloudinary/video', uploadVideo.single('video'), cloudUpload);

module.exports = router;

