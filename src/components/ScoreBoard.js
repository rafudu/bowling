import React from 'react';
import Frame from './Frame';
import ScoreBoardModel from '../models/ScoreBoard';

const ScoreBoard = ({ rolls }) => {
  const scoreBoard = new ScoreBoardModel(rolls);
  return (
    <div className="scoreboard">
      {scoreBoard.toArray().map(frame => <Frame {...frame}/>)}
      <div className="scoreboard__score">
        Score: {scoreBoard.score()}
      </div>
    </div>
  )
}


export default ScoreBoard;
