import { sum } from '../utils';

class Frame {
  constructor({ isLastFrame } = {}) {
    this.isLastFrame = isLastFrame || false;
    this.rolls = [];
    this.computedPoints = [];

  }
  addRolling(pinsDropped) {
    this.rolls.push(pinsDropped);
    this.computedPoints.push(pinsDropped);
  }
  isSpare() {
    return this.rolls.length >= 2 && sum(this.rolls.slice(0,2)) === 10;
  }
  isStrike() {
    return this.rolls[0] === 10;
  }
  rollingIsFinished() {
    if (this.haveAdditionalRolls()) {
      return this.rolls.length === 3;
    }

    return (this.isStrike() || this.rolls.length === 2);
  }
  haveAdditionalRolls() {
    return this.isLastFrame && (this.isStrike() || this.isSpare());
  }
  isPending() {
    const strikeOrSpare =  this.isStrike() || this.isSpare();
    return strikeOrSpare && this.computedPoints.length < 3;
  }
  addPoints(points) {
    this.computedPoints.push(points);
  }
  points() {
    return sum(this.computedPoints);
  }
}
export default Frame;
