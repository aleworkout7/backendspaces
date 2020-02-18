const User = require("../models/User");

module.exports = {
  async index(req, res) {
    const users = await Post.find().sort("-createdAt");

    return res.json(users);
  },
  //registrar
  //login await 
  async store(req, res) {
    const { name, login, password } = req.body;

    const user = await User.create({
      name,
      login,
      password
    });

    //req.io.emit("post", post);

    return res.json(user);
  }
};