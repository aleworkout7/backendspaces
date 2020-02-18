const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SpaceSchema = new mongoose.Schema(
  {
    allowed: Boolean,
    url: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Space", SpaceSchema);