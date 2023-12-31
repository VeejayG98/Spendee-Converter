import { Transaction } from "../types";
import processApple from "../utils/apple";
import { appleTestingData } from "./testData";

describe("Testing the process Apple function", () => {
  it("Process data correctly", () => {
    const inputData = appleTestingData.input;
    const expectedOutput = appleTestingData.expectedOutput;

    const result: Transaction[] = processApple(inputData);
    expect(result).toEqual(expectedOutput);
  });

  it("should handle empty data", () => {
    const result: Transaction[] = processApple(null);
    expect(result).toEqual([]);
  });
});