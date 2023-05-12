import mongoose from "mongoose";
import colors from "colors";

const connection = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `Connected To MongoDB database ${conn.connection.host}`.bgGreen.white
    );
  } catch (err) {
    console.log(`connection error: ${err.message}`.bgRed.white);
  }
};

export default connection;
