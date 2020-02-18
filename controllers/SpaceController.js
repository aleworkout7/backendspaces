const Space = require("../models/Space");

module.exports = {
  async index(req, res) {
    const spaces = await Space.find();

    return res.json(spaces);
  }
};