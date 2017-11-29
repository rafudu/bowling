import React from 'react';
import Frame from './Frame';


const ScoreBoard = ({ frames }) => {
  return (
    <div className="scoreboard">
      {frames.map(frame => <Frame {...frame}/>)}
    </div>
  )
}


export default ScoreBoard;
