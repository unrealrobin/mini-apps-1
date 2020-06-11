import React from 'react';
import BoardPiece from './BoardPiece.js'

class GameBoard extends React.Component {
  constructor(props){
    super(props);

    this.generateBoard = this.generateBoard.bind(this);

    this.state = {
      boardStyles : {
        display: "grid",
        gridTemplateColumns: 'repeat(7, 50px)',
        gridTemplateRows: 'repeat(7, 50px)'
      }
    }
  }



  generateBoard(){
    let boardRows = []
    for(let y = 0; y < 7; y++){
      for(let x = 0; x < 7; x++){
        boardRows.push(<BoardPiece data-x={x} data-y={y}/>)
      }
    }
    console.log(boardRows);
    return boardRows;
  };



  render(){
    return (
      <div id='gameBoard' style={this.state.boardStyles}>
        {
          this.generateBoard().map(peice => {
            return peice;
          } )
        }
      </div>

    )
  }
}

export default GameBoard ;