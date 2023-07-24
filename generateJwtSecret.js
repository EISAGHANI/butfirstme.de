const { v4: uuidv4 } = require('uuid');

// Generate a random JWT secret key
const jwtSecret = uuidv4();

console.log('Generated JWT Secret Key:', jwtSecret);
