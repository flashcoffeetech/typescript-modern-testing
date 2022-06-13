import { sum } from "./sum";

// branch coverage only affect the function that is being tested
// function coverage is for function count, if we only test sum function, so function coverage only 50%

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("adds 2 + 2 to equal 2", () => {
  expect(sum(2, 2)).toBe(2);
});
