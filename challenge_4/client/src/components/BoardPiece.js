import React from 'react';

function BoardPiece(props){
  let peiceStyles = {
    width: 50,
    height: 50,
    backgroundColor: 'beige',
    border: '1px solid black',
    textAlign: 'center',
    lineHeight: "50px"
  };

  return(
    <div style={peiceStyles}>{` ${props['data-x']} , ${props['data-y']} `}</div>
  )
}

export default BoardPiece;