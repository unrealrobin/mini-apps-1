import React from 'react';
import GameBoard from './GameBoard.js';

class App extends React.Component {

  render() {
    return (
      <div>
        <h1>Connect 4</h1>
        <GameBoard />
      </div>
    )
  }
}

export default App;



//comments :

// there should be a board component that provides the spots for the users to click on
  // on click there should be some state logic that changes the color of the peice component
// there needs to be a peice component that changes color depening on the state of the board component
