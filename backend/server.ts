import express, { Request, Response } from "express";
import cors from "cors";
import { CardData } from "./types";

const app = express();

app.use(express.json());
app.use(cors());


app.post("/api/upload_csv", async (req: Request, res: Response) => {
  const cardData: CardData = req.body;
});