// const express = require('express');
// const app = express();

// // Add CORS middleware
// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5001');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE,FETCH');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//   next();
// });

// ;

// // Enable CORS for all origins
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   next();
// });

// // Your routes and other middleware...

// // app.listen(5001, () => {
// //   console.log('Server running on port 5001');
// // });

// // Start the server
// const port = 8080;
// app.listen(port, () => {
//   console.log(`Server is listening on port ${port}`);
// });
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

// Add CORS middleware
app.use((req, res, next) => {
  // Set allowed origin
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); // Update the origin accordingly
  
  // Set allowed methods
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // OPTIONS added for preflight requests
  
  // Set allowed headers
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  // Allow credentials if needed (set to true if your application requires credentials)
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  
  // Set preflight cache duration (in seconds)
  res.setHeader('Access-Control-Max-Age', '3600');
  
  // Expose headers if needed (replace 'X-Custom-Header' with the headers you want to expose)
  res.setHeader('Access-Control-Expose-Headers', 'X-Custom-Header');
  
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

// Your routes and other middleware...

// Start the server
const port = 8080;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
