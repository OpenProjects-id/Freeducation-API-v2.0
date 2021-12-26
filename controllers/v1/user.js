const User = require("../../models/user");

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
      if (!req.body.email || !req.body.password)
        res.status(400).json({ message: "Please Input Email/Password" });
      const user = await User.cekUser(req.body.email, req.body.password);
      const token = await user.generateAuthToken();

      res.send({ user, token });
    } catch (error) {
      res.status(400).send(error);
    }
  },

  logout: async (req, res) => {
    try {
      req.user.tokens = req.user.tokens.filter((x) => x.token !== req.token);

      await req.user.save();
      res.send({ message: "Logout berhasil!" });
    } catch (error) {
      res.status(500).send(error);
    }
  },

  profile: async (req, res) => {
    res.send(req.user);
  },
};
