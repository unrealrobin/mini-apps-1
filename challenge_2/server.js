//Server Initialization and Responses

const express = require('express');
const app = express();
const port = 3000;

app.post('/', (req, res) => {
  res.send('Server is Connected');
})

app.listen(port, () => console.log(`Listening on port: ${port}`));