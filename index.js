const express = require('express');
const app = express();

const port = process.env.PORT || 5000;

app.get('/', (req, res)=>{
    res.send("<h3>Welcome to express!!</h3>");
});

app.listen(port, () => {
    console.log(`The express server is running on ${port}`);
});