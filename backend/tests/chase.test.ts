import { Transaction } from "../types";
import processChase from "../utils/chase";
import { chaseTestData } from "./testData";

describe("Testing the process Chase function", () => {
  it("Process data correctly", () => {
    const inputData = chaseTestData.input;
    const expectedOutput = chaseTestData.expectedOutput;

    const result: Transaction[] = processChase(inputData);
    expect(result).toEqual(expectedOutput);
  });

  it("should handle empty data", () => {
    const result: Transaction[] = processChase(null);
    expect(result).toEqual([]);
  });
});