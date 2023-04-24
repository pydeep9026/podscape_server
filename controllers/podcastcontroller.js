const Podcast = require('../models/podcastmodel');

module.exports.createpodcast = async (req, res, next) => {
  try {
    const { title, description, category, type,  creator, episodes } = req.body;

    if (!title || !description || !category || !type || !creator) {
      return res.status(400).json({ error: 'Please fill all the required fields.' });
    }

    const podcast = new Podcast({
      title,
      description,
      category,
      type,
      creator
    });

    if (episodes && episodes.length > 0) {
      podcast.episodes = episodes;
    }

    await podcast.save();

    return res.status(201).json({ message: 'Podcast created successfully.' });
  } catch (err) {
    next(err);
  }
};

  module.exports.getallpodcasts = async (req, res, next) => {
    try {
      const podcasts = await Podcast.find()
      return res.json(podcasts);
    } catch (err) {
      next(err);
    }
  };
  
