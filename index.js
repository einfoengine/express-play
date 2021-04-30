const express = require('express');
const path = require('path');

const app = express();

// Basic rout
app.get('/', (req, res)=>{
    res.send("<h3>Welcome to express!!</h3>");
});
// Load file
app.get('/home', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`The express server is running on ${port}`);
});