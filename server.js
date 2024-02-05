// server.js
const express = require('express');
require('dotenv').config();  // Load environment variables from .env file
const admin = require('firebase-admin');
console.log("HERE");
const serviceAccountKey = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccountKey),
  databaseURL: 'https://interviews-5ef65.firebaseio.com',
});

// ...rest of your code


const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cors());

// Sample route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


// server.js

// ...

// Middleware to verify Firebase ID token and add user information to request
const authenticateUser = async (req, res, next) => {
    try {
      const idToken = req.headers.authorization;
      const decodedToken = await admin.auth().verifyIdToken(idToken);
      req.user = decodedToken;
      next();
    } catch (error) {
      res.status(401).json({ error: 'Unauthorized' });
    }
  };
  
  // Sample protected route
  app.get('/protected', authenticateUser, (req, res) => {
    res.json({ message: 'This is a protected route', user: req.user });
  });
  
  // ...
  

  // server.js

// ...

// Sample route to create an interview series
app.post('/interviews', authenticateUser, (req, res) => {
    const { title, questions, price } = req.body;
    const userId = req.user.uid;
  
    // Save interview series to Firebase Realtime Database
    const interviewRef = admin.database().ref('/interviews');
    const newInterviewRef = interviewRef.push();
    newInterviewRef.set({
      title,
      questions,
      price,
      author: userId,
    });
  
    res.json({ message: 'Interview series created successfully' });
  });
  
  // ...
  
  // Sample route to get all interview series
  app.get('/interviews', (req, res) => {
    const interviewRef = admin.database().ref('/interviews');
    interviewRef.once('value', (snapshot) => {
      const interviews = snapshot.val();
      res.json({ interviews });
    });
  });
  
  // ...
  