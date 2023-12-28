import { Button } from "@mui/material";
import { Progress, Transaction } from "../utils/types";
import { CSVLink } from "react-csv";

interface ProgressButtonProps {
  progress: Progress;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  downloadData: Transaction[];
}

export default function ProgressButton({
  progress,
  onClick,
  downloadData,
}: ProgressButtonProps) {
  if (progress === "submit") {
    return (
      <div style={{ display: "flex", marginTop: 10 }}>
        <Button color="success" variant="contained" onClick={onClick}>
          Submit
        </Button>
      </div>
    );
  }

  if (progress === "download") {
    return (
      <div style={{ display: "flex", marginTop: 10 }}>
        <CSVLink data={downloadData} filename="test">
          <Button color="success" variant="contained">
            Download
          </Button>
        </CSVLink>
      </div>
    );
  }
  return <></>;
}
