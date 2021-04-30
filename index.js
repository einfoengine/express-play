const express = require('express');
const path = require('path');
const users = require('./Users');
const logger = require('./middleware/logger');

// Initiate app
const app = express();

// Middleware 
app.use(logger);

// Basic rout
app.get('/', (req, res)=>{
    res.send("<h3>Welcome to express!!</h3>");
});
/*
- Returning some plain html
*/

// Load file
app.get('/home', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
/*
- Returning spasific static file
*/

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));
/*
- Returning static files in a certain path, using a middleware
- This is basically a static server
*/

// Get JSON
app.get('/api/users', (req, res)=> res.json(users));
/*
- Return JSON data as api
*/





const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`The express server is running on ${port}`);
});