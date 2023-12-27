import { Button, ThemeProvider, createTheme } from "@mui/material";

type CustomButtonProps = {
  name?: string;
  color: string;
  children?: React.ReactNode
};

export default function CustomButton({ name, color, children }: CustomButtonProps) {
  const theme = createTheme({
    palette: {
      primary: {
        main: color,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained">
        {children}
      </Button>
    </ThemeProvider>
  );
}
