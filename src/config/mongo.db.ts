import mongoose from 'mongoose';
require('dotenv').config()
const MONGODB_URI:string = process.env.MONGODB_URI || '';
const connectToDatabase = async (): Promise<void>  => {
    try {
      await mongoose.connect(MONGODB_URI);
      console.log('Connected to MongoDB By Typegoose');

    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  };
  const closeDatabaseConnection = () => {
    mongoose.connection.close();
  };
  
  export  {connectToDatabase , closeDatabaseConnection} 