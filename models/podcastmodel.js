const mongoose = require('mongoose');

const episodeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  episodeNumber: {
    type: Number,
    required: true
  },
  playableUrl: {
    type: String,
    required: true
  }
});

const podcastSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['Audio', 'Video'],
    required: true
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  episodes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Episode' }],
  ratings: [{
    rating: {
      type: Number,
      min: 1,
      max: 5
    },
    review: {
      type: String
    },
    reviewer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  }]
});

const Episode = mongoose.model('Episode', episodeSchema);

module.exports = { Podcast: mongoose.model('Podcast', podcastSchema), Episode };









 


