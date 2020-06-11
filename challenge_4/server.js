const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('./client/dist'));

app.post('/', (req, res) => {

  res.send('Marker Placed')
})

app.listen(port, () => console.log('Hello from server.'));
