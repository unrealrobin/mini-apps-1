// let worker = require('./client/app.js')

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
//app.use(bodyParser.urlencoded());

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
//app.use(bodyParser.json()) --> only for XHR/AXIOS

//tell the server where to listen
app.listen(port, () => console.log(`Listening on port: ${port}`));

//listen to post requests on the endpoint and have access to req body
app.post('/post', (req, res) => {

  //do some action to the request bosy from a function in app.js
  let jsonObj = JSON.parse(req.body.jsonInput);
  // console.log(jsonObj);
  let csv = transform(jsonObj);


  console.log(csv);
  res.send(csv);//server side operations on data
})


let transform = (jsonObj) => {
  //return a string of all the keys
    //return a string of each nested objs properties for all of those keys
    //use new line symbol '\n'
  let keys = Object.keys(jsonObj);
  let arr = [];
  arr.push(keys.join(','));



  function recurse(obj) {
    if(obj['children'].length == 0){
      let temp = [];
        // temp.push('\n');
      Object.keys(obj).forEach(key => {
        if(key !== 'children'){
          temp.push(obj[key]);
        }
      })
      arr.push(temp.join(','));
      return;
    }

    if(obj.children.length > 0){
      //handles parent of children
      let temp = [];
        // temp.push('\n');
      Object.keys(obj).forEach(key => {
        if(key !== 'children'){
          temp.push(obj[key]);
        }
      })
      arr.push(temp.join(','));

      //handles children
      obj.children.forEach(child => {
        let temp = [];
        // temp.push('\n');
        Object.keys(child).forEach(key => {
          if(key !== 'children'){
            temp.push(child[key]);
          }
      })
      arr.push(temp.join(','));

      child.children.forEach(child => {
        recurse(child);
      })
      })


    }
  };

  recurse(jsonObj);

  return arr.join("\n");
}

