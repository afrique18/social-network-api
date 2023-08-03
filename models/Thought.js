const { Schema, model } = require('mongoose');

// Schema to create a thought model
const thoughSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    createdOn: {
      type: Date,
      default: dateNow,
      get: formatDate,
    },
    username: {
      type: String,
      required: true,
    },

    toJSON: {
      getters: true,
      virtuals: true,
      
    },
    id: false,
  }
);

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
