// const { loadData } = require('../utils/getData');
const Crowd = require('../models/crowdfundings');
module.exports = {
  crowdfundings: async (req, res) => {
    try {
      const data = await Crowd.find();
      res.send(data);
    } catch (error) {
      res.send(error);
    }
  },
  crowdfundingsPost: async (req, res) => {
    try {
      const crowd = new Crowd(req.body);
      await crowd.save();
      res.send({ crowd, msg: 'Berhasil ditambahkan!' });
    } catch (error) {
      res.send(error);
    }
  },
};
