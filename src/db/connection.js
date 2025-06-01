import mongoose from "mongoose";
import { DB_NAME } from "./../constants.js";

const connectDB = async () => {
  try {
    // console.log("Connecting to:", `${process.env.MONGO_URL}/${DB_NAME}`);

    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );
    console.log(
      `\n MongoDB Connected !! | Host: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("Error connecting to database", error);
    process.exit(1);
  }
};

export default connectDB;
