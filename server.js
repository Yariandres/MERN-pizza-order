const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const app = express();

/* Connect to database */ 
connectDB();

/* Init Middleware */
app.use(express.json({ extended: false }));


// Defines ROUTES
app.use('/api/products', require('./routes/api/products'));

// SERVE static assets in production
if(process.env.NODE_ENV === 'production') {
  // SET static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
