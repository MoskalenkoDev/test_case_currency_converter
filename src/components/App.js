import CurrencyConverter from "./CurrencyConverter/CurrencyConverter";
import Header from "./Header/Header";
import { useState } from 'react';
import '../styles/app.css'
import { Container } from "@mui/system";
import { ThemeProvider } from "@mui/material/styles";
import { containerStyles } from "../styles/ContainerStyles";
import { theme } from "../styles/mainTheme";

function App() {
  const [currencyRates, setCurrencyRates] = useState(null);
  return (
    <ThemeProvider theme={theme}>
        <Header currencyRates= {currencyRates}/>
        <Container
          maxWidth="xl"
          sx={containerStyles}
        >
          <CurrencyConverter currencyRates= {currencyRates} setCurrencyRates= {setCurrencyRates}/>
        </Container>
    </ThemeProvider>
  );
}

export default App;
