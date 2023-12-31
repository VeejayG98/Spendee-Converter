import { Transaction } from "../types";
import processDiscover from "../utils/discover";
import { discoverTestData } from "./testData";

describe("Testing the process Discover function", () => {
  it("Process data correctly", () => {
    const inputData = discoverTestData.input;
    const expectedOutput = discoverTestData.expectedOutput;

    const result: Transaction[] = processDiscover(inputData);
    expect(result).toEqual(expectedOutput);
  });

  it("should handle empty data", () => {
    const result: Transaction[] = processDiscover(null);
    expect(result).toEqual([]);
  });
});