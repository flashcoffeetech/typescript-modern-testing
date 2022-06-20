// jest.mock('fs)
import { it, expect, vi } from "vitest";
import { promises as fs } from "fs";

import writeData from "./io";

// automocking, replace all function with empty spy function
// only active on this file
vi.mock("fs");
vi.mock("path", () => {
  return {
    default: {
      join: (...args: any[]) => {
        return args[args.length - 1];
      },
    },
  };
});

it("should execute the writeFile method", () => {
  const testData = "Test";
  const testFilename = "test.txt";

  writeData(testData, testFilename);

  // have side effects, need to use spy / mock
  expect(fs.writeFile).toBeCalledWith(testFilename, testData);
});

it("should return a promise that resolves no value if called correctly", () => {
  const testData = "Test";
  const testFilename = "test.txt";

  writeData(testData, testFilename);

  // have side effects, need to use spy / mock
  return expect(writeData(testData, testFilename)).resolves.toBeUndefined();
});
