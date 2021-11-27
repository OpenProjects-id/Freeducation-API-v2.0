const { loadData } = require('../utils/getData');
module.exports = {
  crowdfundings: (req, res) => {
    try {
      res.send(loadData());
    } catch (error) {
      res.send(error);
    }
  },
};
