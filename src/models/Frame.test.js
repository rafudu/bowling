import Frame from './Frame';

it("computes as a Spare if both rolls add up to 10", () => {
  let frame = new Frame();
  frame.addRolling(0);
  frame.addRolling(10);
  expect(frame.isSpare()).toBe(true);

  frame = new Frame();
  frame.addRolling(5);
  frame.addRolling(5);
  expect(frame.isSpare()).toBe(true);
})

it("computes as a Strike only if first roll is 10", () => {
  const strikeFrame = new Frame();
  strikeFrame.addRolling(10);
  expect(strikeFrame.isStrike()).toBe(true);

  const notaStrikeFrame = new Frame();
  notaStrikeFrame.addRolling(0);
  notaStrikeFrame.addRolling(10);
  expect(notaStrikeFrame.isStrike()).toBe(false);
})

it("finishes the rolling after a strike", () => {
  const frame = new Frame();
  frame.addRolling(10);
  expect(frame.isStrike()).toBe(true);
  expect(frame.rollingIsFinished()).toBe(true);
})

it("finishes the rolling after two rolls", () => {
  const frame = new Frame();
  frame.addRolling(1);
  frame.addRolling(9);
  expect(frame.rollingIsFinished()).toBe(true);
})

it("is pending if it's a strike and doesn't have the points for the next two rolls", () => {
  const frame = new Frame();
  frame.addRolling(10);
  expect(frame.isPending()).toBe(true);
  frame.addPoints(0);
  expect(frame.isPending()).toBe(true);
  frame.addPoints(0);
  expect(frame.isPending()).toBe(false);
})

it("is pending if it's a spare and doesn't have the points for the next two rolls", () => {
  const frame = new Frame();
  frame.addRolling(0);
  frame.addRolling(10);
  expect(frame.isPending()).toBe(true);
  frame.addPoints(0);
  expect(frame.isPending()).toBe(false);
})

it("store points from it's own rolls", () => {
  const frame = new Frame();
  frame.addRolling(0);
  frame.addRolling(10);
  expect(frame.computedPoints[0]).toBe(0);
  expect(frame.computedPoints[1]).toBe(10);

})

it("can receive points from other frames", () => {
  const frame = new Frame();
  frame.addRolling(0);
  frame.addRolling(10);
  frame.addPoints(0);
  expect(frame.computedPoints[0]).toBe(0);
  expect(frame.computedPoints[1]).toBe(10);
  expect(frame.computedPoints[2]).toBe(0);
})

it("returns the sum of stored points", () => {
  const frame = new Frame();
  frame.addRolling(3);
  frame.addRolling(7);
  expect(frame.points()).toBe(10);

  frame.addPoints(7);
  expect(frame.points()).toBe(17);
})

it("can receive additional rolls if its the last frame and a strike", () => {
  const frame = new Frame({ isLastFrame: true });
  expect(frame.haveAdditionalRolls()).toBe(false);
  frame.addRolling(10);
  expect(frame.haveAdditionalRolls()).toBe(true);
})

it("can receive additional rolls if its the last frame and a spare", () => {
  const frame = new Frame({ isLastFrame: true });
  expect(frame.haveAdditionalRolls()).toBe(false);
  frame.addRolling(1);
  frame.addRolling(9);
  expect(frame.haveAdditionalRolls()).toBe(true);
})

it("can not receive additional rolls if its the last frame and not a spare or strike", () => {
  const frame = new Frame({ isLastFrame: true });
  expect(frame.haveAdditionalRolls()).toBe(false);
  frame.addRolling(1);
  frame.addRolling(0);
  expect(frame.haveAdditionalRolls()).toBe(false);
})

it("finishes after three rolls if it has additional rolls", () => {
  const frame = new Frame({ isLastFrame: true });

  frame.addRolling(1);
  frame.addRolling(9);
  expect(frame.haveAdditionalRolls()).toBe(true);
  expect(frame.rollingIsFinished()).toBe(false);

  frame.addRolling(0);
  expect(frame.rolls.length).toBe(3);
  expect(frame.rollingIsFinished()).toBe(true);
})
