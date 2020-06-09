//Server Initialization and Responses

const express = require('express');
const bodyParser = require('body-parser')

//initialize an express app
const app = express();

//port to listen on
const port = 3000;

//runs the html page on the server / connects both of them
app.use(express.static('client'));
//allows the input type to be a json object
app.use(bodyParser.urlencoded());

//tell the server where to listen
app.listen(port, () => console.log(`Listening on port: ${port}`));

//listen to post requests on the endpoint and have access to req body
app.post('/post', (req, res) => {

  //do some action to the request bosy from a function in app.js
  let jsonObj = JSON.parse(req.body.jsonInput);


  console.log(req.body);
  res.send(req.body);//server side operations on data
})

