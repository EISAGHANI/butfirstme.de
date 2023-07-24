// utils/mongodb.js
import mongoose from 'mongoose';

const { MONGODB_URI } = process.env;

export async function connectToDatabase() {
  if (mongoose.connection.readyState === 1) {
    // The connection is already open
    return { db: mongoose.connection.db };
  }

  try {
    // Connect to MongoDB
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
    return { db: mongoose.connection.db };
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit the application on error
  }
}
