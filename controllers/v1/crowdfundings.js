const Crowd = require("../../models/crowdfundings");

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
      res.status(201).send({ crowd, msg: "Berhasil ditambahkan!" });
    } catch (error) {
      res.send(error);
    }
  },
  crowdfundingsEdit: async (req, res) => {
    try {
      const crowd = await Crowd.findOneAndUpdate(
        { _id: req.params.id },
        req.body
      );
      res.send({ crowd, msg: "Berhasil diubah!" });
    } catch (error) {
      res.send(error);
    }
  },
};
