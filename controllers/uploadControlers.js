// exports.uploadVideo = (req, res) => {
//     if (!req.file) {
//       return res.status(400).json({ message: 'No file uploaded' });
//     }
  
//     const videoPath = `/uploads/videos/${req.file.filename}`; // relative path
//     res.status(200).json({
//       message: 'Video uploaded successfully',
//       videoUrl: videoPath
//     });
//   };
  

exports.cloudUpload = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'Upload failed' });
  }

  const fileData = req.file;

 retrun.json({
    message: 'Upload successful',
    cloudinaryUrl: fileData.path,
    publicId: fileData.filename
  });
};
