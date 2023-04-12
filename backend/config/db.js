const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const connectDB = async () => {
  // console.log(process.env.MONGO_URI);
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log(`DB connected ${connect.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
