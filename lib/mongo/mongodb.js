import mongoose from 'mongoose';

export const connectMongo = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URL}`);
    console.info('Connected to MongoDB');
  } catch (e) {
    console.info('Error connecting to MongoDB', e);
  }
};