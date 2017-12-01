import React from 'react'

class RandomRoller extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.state.lastRoll = null;
    this.roll = this.roll.bind(this);
  }
  rollStrike() {
    [10].forEach(this.props.roll);
  }
  rollSpare() {
    const roll1 = Math.floor(Math.random()*10);
    return [roll1, 10-roll1].forEach(this.props.roll);
  }
  rollMiss() {
    const roll1 = Math.floor(Math.random()*10);
    const miss = Math.floor(Math.random()*(9-roll1));
    return [roll1, miss].forEach(this.props.roll);
  }
  roll() {
    const k = Math.random();
    if(k < 0.1) return this.rollStrike();
    if(k > 0.1 && k < 0.5) return this.rollSpare();
    return this.rollMiss();
  }
  render() {
    return (
      <div className="randomRoller">
        <button onClick={this.roll}>Roll it!</button>
        <button onClick={() => this.rollStrike()}>Strike it!</button>
        <button onClick={() => this.rollSpare()}>Spare it!</button>
      </div>
    )
  }
}
export default RandomRoller;
