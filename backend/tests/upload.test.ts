import supertest from "supertest";
import app from "../server";
import { CardData } from "../types";
import {
  apiUploadTestingData,
  appleTestingData,
  chaseTestData,
  discoverTestData,
} from "./testData";

jest.mock("../utils/discover", () => {
  return jest.fn(() => discoverTestData.expectedOutput);
});

jest.mock("../utils/chase", () => {
  return jest.fn(() => chaseTestData.expectedOutput);
});

jest.mock("../utils/apple", () => {
  return jest.fn(() => appleTestingData.expectedOutput);
});

describe("/api/upload_csv POST endpoint", () => {
  it("it should return a sorted JSON data", async () => {
    const mockData: CardData = {
      discover: discoverTestData.input,
      chase: chaseTestData.input,
      apple: appleTestingData.input,
    };

    const response = await supertest(app)
      .post("/api/upload_csv")
      .send(mockData);

    expect(response.status).toBe(200);
    expect(response.body).toEqual(apiUploadTestingData);
  });
});
