 /* Personal EC  IIFE's  */
 (function(){

  let whichMark = true;
  let mark= "";
  let score = 0;
  let moveCount = 0;
  let board = document.getElementById('board');
  let allChildren = Array.from(board.children);
  let display = document.getElementById('display');
  let xPoints = 0;
  let oPoints = 0;

  let playMove = (event) => {

    //logic for mark
    if(whichMark){
      mark = "X"
    } else {
      mark = "O";
    }

    //show mark on DOM by replacing elements text
    if(event.target.innerText == ""){
      event.target.innerText = mark;
      whichMark = !whichMark;
      moveCount++;
    }else if (event.target.innerText !== ""){
      display.innerHTML = 'Must play in an unoccupied spot!';
    }


    //functionality to check for winner
    if (moveCount >= 5 && moveCount < 9 ) {
      checkForWinner('X');
      checkForWinner('O');
    } else if (moveCount == 9){
      let xs = checkForWinner('X');
      let os = checkForWinner('O');
      if(xs == null && os == null){
        setTimeout(function(){
          reset();
        }, 3000)
        console.log('It\'s a Tie, Play again!')
      }
    }

   }

  let reset = () => {
    allChildren.forEach(child => {
      child.innerHTML = "";
    });

    moveCount = 0;
    whichMark = true;
    display.innerHTML = 'Make your move!';


   }

  let actionsOnWin = (mark) => {
    display.innerHTML = `${mark}'s win! Play Again!`;

    //increment score for winning team
    if (mark == 'X'){
      xPoints++;
    }else{
      oPoints++;
    }

    //assign points to the winner on the scoreboard
    assignPoints(mark);

    //after 2 sec. reset the board, and let the winner go first on next game.
    setTimeout(function(){
      reset();
      if(mark == "O"){
        whichMark = false;
      }
    }, 2000)


   }

  let assignPoints = (mark) => {
    //finding dom elements for each teams score
    let x = document.getElementById('xTeamPoints');
    let o = document.getElementById('oTeamPoints');

    //assigning points to those elements
    x.innerHTML = xPoints.toString();
    o.innerHTML = oPoints.toString();

   }

  let giveSpotsFunctionality = () => {
    //console.log(allChildren)
    allChildren.forEach(child => {
     child.addEventListener('click', function(event){
       playMove(event);
       board.transform = 'rotate(90)';
     })
    })
   };

  let assignTeamNames = () => {
    let xTeamName = prompt('X Team Player Name');
    let oTeamName = prompt('O Team Player Name');

    if (xTeamName) {
      document.getElementById('xTeamName').innerText = `${xTeamName} : `;
    } else {
      xTeamName = "X";
      document.getElementById('xTeamName').innerText = `${xTeamName} : `;
    }

    if (oTeamName) {
     document.getElementById('oTeamName').innerText = `${oTeamName} : `;
    } else {
     oTeamName = "O";
     document.getElementById('oTeamName').innerText = `${oTeamName} : `;
    }

    display.innerHTML = `Welcome Conqueror ${xTeamName} & Slayer ${oTeamName}.`

    setTimeout(function(){
      display.innerHTML = "Make your move!"
    }, 5000)

   }

  let checkForWinner = (mark) => {
   if(allChildren[0].innerHTML == mark && allChildren[1].innerHTML == mark && allChildren[2].innerHTML == mark) {
     actionsOnWin(mark);
   } else if(allChildren[3].innerHTML == mark && allChildren[4].innerHTML == mark && allChildren[5].innerHTML == mark) {
     actionsOnWin(mark);
   } else if(allChildren[6].innerHTML == mark && allChildren[7].innerHTML == mark && allChildren[8].innerHTML == mark) {
     actionsOnWin(mark);
   } else if(allChildren[0].innerHTML == mark && allChildren[4].innerHTML == mark && allChildren[8].innerHTML == mark) {
     actionsOnWin(mark);
   } else if(allChildren[2].innerHTML == mark && allChildren[4].innerHTML == mark && allChildren[6].innerHTML == mark) {
     actionsOnWin(mark);
   } else if(allChildren[0].innerHTML == mark && allChildren[3].innerHTML == mark && allChildren[6].innerHTML == mark) {
     actionsOnWin(mark);
   } else if(allChildren[1].innerHTML == mark && allChildren[4].innerHTML == mark && allChildren[7].innerHTML == mark) {
     actionsOnWin(mark);
   } else if(allChildren[2].innerHTML == mark && allChildren[5].innerHTML == mark && allChildren[8].innerHTML == mark) {
     actionsOnWin(mark);
   } else{
     return null;
   }
   }

   let giveReset = () => {
     let resetBtn = document.getElementById('btn');
     resetBtn.addEventListener('click', function(){
       reset();
     })
   }

  giveSpotsFunctionality();
  assignTeamNames();
  //initially i had given the reset function as an attribute in the html but when I switched to iife pattern, it wasnt able to access it because the enclosing function hides everything else from global pollution
  giveReset();

})();