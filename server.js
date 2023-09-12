const express = require('express');
const path = require('path');

const app = express();

// Serve static files from a public directory (e.g., CSS, images, etc.)
app.use(express.static('public'));

// Serve your HTML file for all routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

  

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});