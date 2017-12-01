import { sum } from '../utils';

import Frame from './Frame';

class ScoreBoard {
  constructor(rolls = []) {
    this.frames = [];
    this.currentFrameIndex = 0;
    this.currentFrame = new Frame();
    this.maxFrames = 10;
    rolls.forEach((roll) => {
      this.computeRoll(roll);
    })
  }

  isLastFrame() {
    return this.currentFrameIndex === this.maxFrames-1;
  }
  frame() {
    if (!this.frames[this.currentFrameIndex]) {
      this.frames[this.currentFrameIndex] = (new Frame({
        isLastFrame: this.isLastFrame(),
      }))
    }
    return this.frames[this.currentFrameIndex];
  }
  computeRoll(pinsDropped) {
    if(this.currentFrameIndex > this.maxFrames - 1) return;
    this.frame().addRolling(pinsDropped);
    this.frames
      .filter((frame, index) => frame.isPending() && index !== this.currentFrameIndex)
      .forEach((frame) => frame.addPoints(pinsDropped));

    if(this.frame().rollingIsFinished()) {
      this.nextFrame();
    }
  }

  score() {
    const points = this.frames.map(frame => frame.points());
    return sum(points);
  }

  nextFrame(){
    this.currentFrameIndex++;
  }

  toArray() {
    const frames = [];
    const lastFrame = this.maxFrames - 1;
    for (var i = 0; i < this.maxFrames; i++) {
      const frame = this.frames[i] ? this.frames[i].toJSON() : (new Frame({ isLastFrame: i === lastFrame})).toJSON();
      frame.key = i;
      frames.push(frame);
    }
    return frames;

  }

}


export default ScoreBoard;
