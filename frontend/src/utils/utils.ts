import { BankFiles, CSVData } from "./types";

export async function readFiles(bankFiles: BankFiles) {
  const readFile = (file: File, key: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = (event) => {
        const text = event.target?.result as string;
        resolve(text);
      };

      reader.onerror = (error) => {
        reject(error);
      };

      reader.readAsText(file);
    });
  };

  const promises: { [key: string]: Promise<string> } = {};

  for (const key in bankFiles) {
    const attachment = bankFiles[key as keyof BankFiles];
    if (attachment) {
      promises[key] = readFile(attachment, key);
    }
  }

  const texts = await Promise.all(Object.values(promises));

  const csvData: CSVData = Object.fromEntries(
    Object.keys(promises).map((key, index) => [key, texts[index]])
  );

  return csvData;
}
