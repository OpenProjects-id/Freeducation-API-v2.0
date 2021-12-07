const mongoose = require('mongoose');

const crowdfundingsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    required: true,
    trim: true,
  },
  thumbnail: {
    type: String,
  },
  data: {
    type: String,
  },
  // pledged: {
  //   type: Number,
  //   required: true,
  //   trim: true,
  // },
  // target: {
  //   type: Number,
  //   required: true,
  //   trim: true,
  // },
  // date_end: {
  //   type: Number,
  //   required: true,
  //   trim: true,
  // },
  profile_photo: {
    type: String,
    trim: true,
  },
  profile_name: {
    type: String,
    trim: true,
  },
});

const Crowdfundings = mongoose.model('crowdfundings', crowdfundingsSchema);

module.exports = Crowdfundings;
