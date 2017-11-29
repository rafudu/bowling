import ScoreBoard from './ScoreBoard';

it("moves to the next frame when strike", () => {
  const board = new ScoreBoard();
  expect(board.currentFrameIndex).toBe(0);
  board.computeRoll(10);
  expect(board.currentFrameIndex).toBe(1);
  expect(board.frames.length).toBe(1);
})

it("moves to the next frame after two rolls", () => {
  const board = new ScoreBoard();
  expect(board.currentFrameIndex).toBe(0);
  board.computeRoll(0);
  board.computeRoll(0);
  expect(board.currentFrameIndex).toBe(1);
  expect(board.frames.length).toBe(1);
})


it("adds next two rolls to the last frame if it was a strike", () => {
  const board = new ScoreBoard();
  board.computeRoll(10);
  board.computeRoll(1);
  board.computeRoll(0);
  expect(board.frames.length).toBe(2);
  expect(board.frames[0].isStrike()).toBe(true);
  expect(board.frames[0].points()).toBe(11);
  // expect(board.score()).toBe(12);
})

it("adds next roll to the last frame if it was a spare", () => {
  const board = new ScoreBoard();
  board.computeRoll(1);
  board.computeRoll(9);

  board.computeRoll(3);
  // board.computeRoll(0);

  expect(board.frames.length).toBe(1);
  expect(board.frames[0].isSpare()).toBe(true);
  expect(board.frames[0].points()).toBe(13);
  // expect(board.score()).toBe(16);
})

it("keeps track of the score of finished frames", () => {
  const board = new ScoreBoard();
  board.computeRoll(1);
  board.computeRoll(1);

  board.computeRoll(1);
  expect(board.score()).toBe(2);
})

it("treats the 10th frame as the last frame", () => {
  const board = new ScoreBoard();
  board.computeRoll(10);
  board.computeRoll(10);
  board.computeRoll(10);
  board.computeRoll(10);
  board.computeRoll(10);

  board.computeRoll(10);
  board.computeRoll(10);
  board.computeRoll(10);
  board.computeRoll(10);
  board.computeRoll(10);


  expect(board.frames.length).toBe(10);
  expect(board.currentFrame.isLastFrame).toBe(true);


})
it("scores 300 for a perfect game", () => {
  const board = new ScoreBoard();
  board.computeRoll(10);
  board.computeRoll(10);
  board.computeRoll(10);
  board.computeRoll(10);
  board.computeRoll(10);

  board.computeRoll(10);
  board.computeRoll(10);
  board.computeRoll(10);
  board.computeRoll(10);
  board.computeRoll(10);

  board.computeRoll(10);
  board.computeRoll(10);

  expect(board.score()).toBe(300);

})

it("scores 279 for a near perfect game", () => {
  const board = new ScoreBoard();
  board.computeRoll(10);
  board.computeRoll(10);
  board.computeRoll(10);
  board.computeRoll(10);
  board.computeRoll(10);

  board.computeRoll(10);
  board.computeRoll(10);
  board.computeRoll(10);
  board.computeRoll(10);
  board.computeRoll(9);
  board.computeRoll(1);

  board.computeRoll(10);

  expect(board.score()).toBe(279);

})

it("scores 176 points for the example game", () => {
  const board = new ScoreBoard();
  board.computeRoll(9);
  board.computeRoll(1);

  board.computeRoll(0);
  board.computeRoll(10);

  board.computeRoll(10);
  board.computeRoll(10);

  board.computeRoll(6);
  board.computeRoll(2);

  board.computeRoll(7);
  board.computeRoll(3);

  board.computeRoll(8);
  board.computeRoll(2);

  board.computeRoll(10);

  board.computeRoll(9);
  board.computeRoll(0);

  board.computeRoll(10);
  board.computeRoll(10);
  board.computeRoll(8);

  expect(board.score()).toBe(176);
})
