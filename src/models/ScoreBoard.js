import { sum } from '../utils';

import Frame from './Frame';

class ScoreBoard {
  constructor() {
    this.frames = [];
    this.currentFrameIndex = 0;
    this.currentFrame = new Frame();
    this.totalFrames = 10;
  }

  isLastFrame() {
    return this.currentFrameIndex === this.totalFrames-1;
  }

  computeRoll(pinsDropped) {
    this.currentFrame.addRolling(pinsDropped);
    this.frames
      .filter((frame) => frame.isPending())
      .forEach((frame) => frame.addPoints(pinsDropped));

    if(this.currentFrame.rollingIsFinished()) {
      this.nextFrame();
    }
  }

  score() {
    const points = this.frames.map(frame => frame.points());
    return sum(points);
  }

  nextFrame(){
    this.frames.push(this.currentFrame);
    this.currentFrame = new Frame({
      isLastFrame: this.isLastFrame(),
    });
    this.currentFrameIndex++;
  }

  toArray() {
    const frames = [];
    const lastFrame = this.totalFrames - 1;
    for (var i = 0; i < this.totalFrames; i++) {
      const frame = this.frames[i] ? this.frames[i].toJSON() : (new Frame({ isLastFrame: i === lastFrame})).toJSON();
      frame.key = i;
      frames.push(frame);
    }
    return frames;

  }

}


export default ScoreBoard;
