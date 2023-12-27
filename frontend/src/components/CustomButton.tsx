import { Button, ThemeProvider, createTheme } from "@mui/material";

type CustomButtonProps = {
  name?: string;
  color: string;
  children?: React.ReactNode;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

export default function CustomButton({
  name,
  color,
  children,
  onChange,
}: CustomButtonProps) {
  const theme = createTheme({
    palette: {
      primary: {
        main: color,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <input
        type="file"
        accept=".csv"
        name={name}
        onChange={onChange}
        hidden
        id={`contained-button-file-${name}`}
      />
      <label htmlFor={`contained-button-file-${name}`}>
        <Button variant="contained" component="span">
          {children}
        </Button>
      </label>
    </ThemeProvider>
  );
}
