import { sum } from '../utils';

import Frame from './Frame';

class ScoreBoard {
  constructor() {
    this.frames = [];
    this.currentFrameIndex = 0;
    this.currentFrame = new Frame();

  }

  isLastFrame() {
    return this.currentFrameIndex === 9;
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

}


export default ScoreBoard;
