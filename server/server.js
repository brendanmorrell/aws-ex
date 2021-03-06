const path = require('path');
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

const publicPath = path.join(__dirname, '..', 'client', 'dist');
app.use(express.static(publicPath));
app.get('/', (req, res) => res.sendFile('index.html'));

app.listen(port, () => console.log(`server listening on ${port}...`));
