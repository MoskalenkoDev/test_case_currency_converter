import CurrencyConverter from "./CurrencyConverter/CurrencyConverter";
import Header from "./Header/Header";
import '../styles/app.css'
import { Container } from "@mui/system";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    neutral: {
      main: pink[900],
      contrastText: 'white',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <Header />

        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            flexDirection: 'column',
            justifyContent: "center",
            alignItems: "center",
            height: "100%"
          }}
        >
          <CurrencyConverter />
        </Container>

      </div>
    </ThemeProvider>

  );
}

export default App;
