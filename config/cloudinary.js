const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
require('dotenv').config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const videoStorage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'videos',          // cloud folder
    resource_type: 'video',    // important for .mp4/.mov/etc
    format: async (req, file) => 'mp4',
    public_id: (req, file) => `${Date.now()}-${file.originalname}`,
  },
});

module.exports = {
  cloudinary,
  videoStorage
};
