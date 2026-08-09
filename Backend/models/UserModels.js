const mongoose = require('mongoose');


const connectDB = async () => {
  try {
    
    await mongoose.connect(process.env.MONGO_URL_DEV);
    console.log('Connected to MongoDB Atlas!');
  } catch (err) {
    console.error('Atlas Connection Error:', err.message);
    process.exit(1);
  }
};

const userSchema = new mongoose.Schema({
   username: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  }
}, { timestamps: true });


const User = mongoose.model('User', userSchema);


module.exports = { User, connectDB }; 


