const fs = require('fs');
const path = require('path');

exports.streamVideo = (req, res) => {
  const { filename } = req.params;
  const videoPath = path.join(__dirname, '..', 'uploads', 'videos', filename);

  // Check if file exists
  if (!fs.existsSync(videoPath)) {
    return res.status(404).json({ message: 'Video not found' });
  }

  const stat = fs.statSync(videoPath);
  const fileSize = stat.size;
  const range = req.headers.range;

  if (!range) {
    return res.status(416).send('Requires Range header');
  }

  const parts = range.replace(/bytes=/, '').split('-');
  const start = parseInt(parts[0], 10);
  const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;

  const chunkSize = end - start + 1;
  const file = fs.createReadStream(videoPath, { start, end });

  const contentType = 'video/mp4'; // Change if other formats (e.g. video/webm)
  const headers = {
    'Content-Range': `bytes ${start}-${end}/${fileSize}`,
    'Accept-Ranges': 'bytes',
    'Content-Length': chunkSize,
    'Content-Type': contentType
  };

  res.writeHead(206, headers);
  file.pipe(res);
};
