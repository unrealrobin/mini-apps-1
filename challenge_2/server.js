// let worker = require('./client/app.js')
var fs = require('fs');
var multer = require('multer');
//Server Initialization and Responses
const express = require('express');
const bodyParser = require('body-parser');

//initialize an express app
const app = express();

//port to listen on
const port = 3000;

//runs the html page on the server / connects both of them
app.use(express.static('client'));
//allows the input type to be a json object
app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({ extended: false }))

//tell the server where to listen
app.listen(port, () => console.log(`Listening on port: ${port}`));

//listen to post requests on the endpoint and have access to req body
app.post('/post', upload.single('jsonInput') ,(req, res) => {

  //do some action to the request bosy from a function in app.js
  // let jsonObj = JSON.parse(req.body.jsonInput);
  // console.log(jsonObj);
  // let csv = transform(jsonObj);
  // console.log(csv);
  // console.log(req.body);

  // fs.readFile('filepath', 'utf8', (err, result) => {
  //   if(err){
  //     throw err;
  //   }else{
  //     console.log(result);
  //   }
  // })

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

