import express, { Request, Response } from "express";
import cors from "cors";
import { CardData, Transaction } from "./types";
import processDiscover from "./utils/discover";
import processChase from "./utils/chase";
import processApple from "./utils/apple";

const app = express();

app.use(express.json());
app.use(cors());


app.post("/api/upload_csv", async (req: Request, res: Response) => {
  const cardData: CardData = req.body;
  const discoverData: Transaction[] = processDiscover(cardData.discover);
  const chaseData: Transaction[] = processChase(cardData.chase);
  const appleData: Transaction[] = processApple(cardData.apple);

  const jsonData: Transaction[] = discoverData.concat(chaseData, appleData);

  jsonData.sort((a, b) => {
    const date1 = new Date(a.date).getTime();
    const date2 = new Date(b.date).getTime();

    if (date1 < date2) return -1;

    if (date1 > date2) return 1;
    return 0;
  });

  res.json(jsonData)
});

app.listen(3001);