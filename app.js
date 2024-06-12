const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'View'));

app.use(express.static(path.join(__dirname, 'Public')));

// routes
app.get('/', (req, res) => {
  res.render('index', { title: 'TechXcelerate Home' });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About TechXcelerate' });
});

app.get('/blog', (req, res) => {
  res.render('blog', { title: 'TechXcelerate Blog' });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Checkout: http://localhost:${PORT}`);
});
