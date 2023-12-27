import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  Button,
  Card,
  CardContent,
  Grid,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { blue, orange, purple } from "@mui/material/colors";
import CustomButton from "./components/CustomButton";
import {BankFiles} from "./utils/types"

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#FFFFFF",
      },
    },
  });

  const [bankFiles, setBankFiles] = useState<BankFiles>({});

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;

    const name = event.target.name;
    const file = event.target.files[0];
    setBankFiles((prev) => {
      return {
        ...prev,
        [name]: file,
      };
    });

  };

  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: theme.palette.primary.main,
        }}
      >
        <Card sx={{ width: 400 }}>
          <CardContent>
            <Grid container justifyContent="space-between">
              <Grid item>
                <CustomButton color={orange[500]} name="discover" onChange={handleFileChange}><b>Discover</b></CustomButton>
              </Grid>

              <Grid item>
              <CustomButton color={blue[500]} name="chase" onChange={handleFileChange}><b>Chase</b></CustomButton>
              </Grid>

              <Grid item>
              <CustomButton color={purple[500]} name="apple" onChange={handleFileChange}><b>Apple</b></CustomButton>
              </Grid>

            </Grid>
          </CardContent>
        </Card>
      </div>
    </ThemeProvider>
  );
}

export default App;
