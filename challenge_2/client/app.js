/*

  1. Submit a JSON object to the input field
  2. On the server, rearrange JSON obj in a CSV style response
  3. Return the resonse in the response body
  4. Append the resonse to the DOM

*/

//function turns json object into  csv style doc

let transform = (jsonObj) => {
  //return a string of all the keys
    //return a string of each nested objs properties for all of those keys
    //use new line symbol '\n'
  let keys = Object.keys(jsonObj);
  let arr = [];
  arr.push(keys.join(','));



  function recurse(obj){
    if(obj.children.length == 0){
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
  }
  recurse(jsonObj);

  return arr.join(" \n ");
}

