const mongoose = require("mongoose");
const Populate = require("../util/autopopulate");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: { type: String, required: true },
  url: { type: String, required: true },
  summary: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  subreddit: { type: String, required: true },
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
  upVotes: [{ type: Schema.Types.ObjectId, ref: "User" }],
  downVotes: [{ type: Schema.Types.ObjectId, ref: "User" }],
  voteScore: { type: Number }
});

PostSchema
  .pre('findOne', Populate('author'))
  .pre('find', Populate('author'))


module.exports = mongoose.model("Post", PostSchema);