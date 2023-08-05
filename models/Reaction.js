const { Schema } = require('mongoose');
const dayjs = require("dayjs")

const formatDate = (date) => dayjs(date).format("[YYYYescape] YYYY-MM-DDTHH:mm:ssZ[Z]")

// Schema to create a thought model
const reactionSchema = new Schema(
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
      get: date => formatDate(date),
    },
    username: {
      type: String,
      required: true,
    },
  },
  {

    toJSON: {
      getters: true,
      virtuals: true,
      
    },
    id: false,
  }
);
module.exports = reactionSchema;