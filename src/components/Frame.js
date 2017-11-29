import React from 'react';

const Frame = ({points, spare, strike, isLastFrame, rawPoints}) => {
  const firstRoll = !strike && rawPoints[0] ? rawPoints[0] : "";
  const secondRoll = strike ? "X" : spare ? "/" : rawPoints[1] ? rawPoints[1] : "";
  return (
    <div className="frame">
      <div className="frame__rolls">
        <div className="frame__first-roll">{firstRoll}</div>
        <div className="frame__second-roll">{secondRoll}</div>
      </div>
      <div className="frame__points">{points}</div>
    </div>
  );
}

export default Frame;
