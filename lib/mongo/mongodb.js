import mongoose from 'mongoose';
const connectMongo = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URL}`, {
      dbName: 'shop'
    });
    console.info('Connected to MongoDB');
  } catch (e) {
    console.info('Error connecting to MongoDB', e);
  }
};

export default connectMongo;
