import React from 'react';

const Frame = ({points, spare, strike, isLastFrame, rawPoints, haveAdditionalRolls}) => {
  const firstRoll = !strike && rawPoints[0] ? rawPoints[0] : "";
  const secondRoll = strike ? "X" : spare ? "/" : rawPoints[1] ? rawPoints[1] : "";
  const thirdRoll = haveAdditionalRolls ? <div className="frame__extra-roll">{rawPoints[2]}</div> : null;
  return (
    <div className={`frame ${haveAdditionalRolls ? 'frame--additionalRolls' : ''}`}>
      <div className="frame__rolls">
        <div className="frame__first-roll">{String(firstRoll)}</div>
        <div className="frame__second-roll"><div>{String(secondRoll)}</div> {thirdRoll}</div>
      </div>
      <div className="frame__points">{points}</div>
    </div>
  );
}

export default Frame;
