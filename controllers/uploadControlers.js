 
exports.cloudUpload = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'Upload failed' });
  }

  const fileData = req.file;

  res.status(200).json({
    message: 'Upload successful',
    cloudinaryUrl: fileData.path,
    publicId: fileData.filename
  });
};
