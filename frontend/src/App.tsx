import React from "react";
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

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#FFFFFF",
      },
    },
  });

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
                <CustomButton color={orange[500]}><b>Discover</b></CustomButton>
              </Grid>

              <Grid item>
              <CustomButton color={blue[500]}><b>Chase</b></CustomButton>
              </Grid>

              <Grid item>
              <CustomButton color={purple[500]}><b>Apple</b></CustomButton>
              </Grid>

            </Grid>
          </CardContent>
        </Card>
      </div>
    </ThemeProvider>
  );
}

export default App;
