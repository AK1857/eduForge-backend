const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, unique: true },
  description: String,
  category: String,
  thumbnail: String,
  language: String,
  level: { type: String, enum: ['beginner', 'intermediate', 'advanced'] },
  instructor: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },

  modules: [
    {
      title: String,
      lessons: [
        {
          title: String,
          videoUrl: String,
          duration: Number, // in seconds
          resourceUrl: String, // optional PDF or file
        },
      ]
    }
  ],

  price: Number,
  isFree: { type: Boolean, default: false },
  published: { type: Boolean, default: false },
  enrolledCount: { type: Number, default: 0 },

  ratings: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      rating: Number,
      review: String,
      createdAt: { type: Date, default: Date.now }
    }
  ],

  createdAt: { type: Date, default: Date.now },
  updatedAt: Date
});

module.exports = mongoose.model('Course', CourseSchema);
