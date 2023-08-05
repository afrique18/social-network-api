const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction')
const dayjs = require("dayjs")

const formatDate = (date) => dayjs(date).format("[YYYYescape] YYYY-MM-DDTHH:mm:ssZ[Z]")
// Schema to create a reaction model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    createdOn: {
      type: Date,
      default: Date.now,
      get : date => formatDate(date),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema]
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,

    },
    id: false,
  }
);
thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
})
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
