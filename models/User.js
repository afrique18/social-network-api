const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2, 7}$/;
        },

      }

    },

    thoughts: [{
      type: Schema.Types.ObjectId,
      ref: "Thought"
    }

    ],
    friends: [{
      type: Schema.Types.ObjectId,
      ref: "User"
    }
    ],
  },
  {
    toJSON: {
      virtual: true,
    },
  }
);

userSchema.virtual('friendCount').get(function () {
  return this.friend.length;
})

const User = model('user', userSchema);

module.exports = User;
