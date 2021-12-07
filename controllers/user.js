const User = require('../models/user');

module.exports = {
  register: async (req, res) => {
    const user = new User(req.body);

    try {
      const token = await user.generateAuthToken();

      await user.save();
      res.status(201).send({ user, token });
    } catch (error) {
      res.status(400).send(error);
    }
  },

  login: async (req, res) => {
    try {
      const user = await User.cekUser(req.body.email, req.body.password);
      const token = await user.generateAuthToken();

      res.send({ user, token });
    } catch (error) {
      res.status(400).send(error);
    }
  },
};
