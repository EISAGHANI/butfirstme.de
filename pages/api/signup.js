// api/signup.js
import bcrypt from 'bcrypt';
import { connectToDatabase } from '../../utils/mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    // Connect to MongoDB database
    const { db } = await connectToDatabase();

    // Check if the email is already in use
    const existingUser = await db.collection('users').findOne({ email });

    if (existingUser) {
      return res.status(409).json({ error: 'Email already in use' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user document in the database
    const newUser = await db.collection('users').insertOne({
      email,
      password: hashedPassword,
    });

    return res.status(201).json({ message: 'User created successfully' });
  }
}
