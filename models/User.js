const { Schema, model } = require('mongoose');
const assignmentSchema = require('./Assignment');

// Schema to create Student model
const studentSchema = new Schema(
  {
    User: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2, 7}$/, 'Please enter a valid email address'
    },
    
    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: "Thought"
    }

    ],
    friend: [{
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

userSchema.virtual('friendCount').get(function (){
    return this.friend.length;
})

const User = model('user', userSchema);

module.exports = User;
