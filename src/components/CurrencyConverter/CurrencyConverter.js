import { useRef, useEffect, useState } from 'react';
import { Box, TextField, MenuItem, FormControl, InputLabel, Select, Input, ListItemIcon, Button } from '@mui/material';
import { pink } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CurrencyDropDown from '../CurrencyDropDown/CurrencyDropDown';
import { currencies } from '../currencies';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import CurrencyInput from '../CurrencyInput/CurrencyInput';


const boxInputWrapperStyles = {

    border: `1px solid ${pink[900]}`,
    borderRadius: "8px",
    p: 2,
    display: 'flex',
    flexDirection: 'column',
}

const theme = createTheme({
    palette: {
        neutral: {
            main: pink[900],
            contrastText: 'white',
        },
    },
});

const buttonStyles = [
    {
        '& .MuiButton-startIcon': { mr: 0, ml: 0 }
    },
    {
        minWidth: '56px ', minHeight: '40px',
    }
];

const CurrencyConverter = () => {

    const [mainCurrency, setMainCurrency] = useState('USD');
    const [secondaryCurrency, setSecondaryCurrency] = useState('UAH');
    const [currentRate, setCurrentRate] = useState('...');

    const [mainInputValue, setMainInputValue] = useState('');
    const [secondaryInputValue, setSecondaryInputValue] = useState('');

    const [currencyRates, setCurrencyRates] = useState(null);


    const convertCurrency = (mainCurrency, secondaryCurrency, countOfMoney, jsonResponse) => {
        let convertedMoney = 0;
        convertedMoney = countOfMoney / jsonResponse.rates[mainCurrency] * jsonResponse.rates[secondaryCurrency];
        return Number(convertedMoney.toFixed(2));
    }

    const onBtnClick = () => {
        let [mainSwitchedCurrency, secondarySwitchedCurrency] = [secondaryCurrency, mainCurrency];
        let [mainSwithedInputValue, secondarySwithedInputValue] = [secondaryInputValue, mainInputValue];
        setMainCurrency(mainSwitchedCurrency);
        setSecondaryCurrency(secondarySwitchedCurrency);
        setMainInputValue(mainSwithedInputValue);
        setSecondaryInputValue(secondarySwithedInputValue);
    }

    const getCurrencyRates = async () => {

        const myHeaders = new Headers();
        myHeaders.append("apikey", "Gh7il0pgx8KsFLI6qqNhdaKsKE0scuRP");

        const requestOptions = {
            method: 'GET',
            redirect: 'follow',
            headers: myHeaders
        };

        let response = await fetch(`https://api.apilayer.com/exchangerates_data/latest?symbols=USD,UAH,EUR&base=USD`, requestOptions);
        let jsonResponse = await response.json();
        setCurrencyRates(jsonResponse);
        let rate = convertCurrency(mainCurrency, secondaryCurrency, 1, jsonResponse);
        setCurrentRate(rate);
    }

    useEffect(() => {
        getCurrencyRates();
    }, [])

    useEffect(() => {
        if (currencyRates) {
            let rate = convertCurrency(mainCurrency, secondaryCurrency, 1, currencyRates);
            setCurrentRate(rate);
            let convertedValue = convertCurrency(mainCurrency, secondaryCurrency, Number(mainInputValue), currencyRates);
            setSecondaryInputValue(convertedValue ? convertedValue: "");
        }
    }, [mainCurrency, secondaryCurrency])

    const changeMainValue = (currentValue) => {
        let convertedValue = convertCurrency(mainCurrency, secondaryCurrency, Number(currentValue), currencyRates);
        setSecondaryInputValue(convertedValue ? convertedValue: "");
    }

    const changeSecondaryValue = (currentValue) => {
        let convertedValue = convertCurrency(secondaryCurrency, mainCurrency, Number(currentValue), currencyRates);
        setMainInputValue(convertedValue ? convertedValue: "");
    }

    return (
        <Box sx={boxInputWrapperStyles}>

            <Box sx={{ mb: 2, minWidth: "120px" }}>
                <CurrencyDropDown currency={mainCurrency} setCurrency={setMainCurrency} />
                <CurrencyInput inputValue={mainInputValue} setInputValue={setMainInputValue} changeInputValue = {changeMainValue} disabled= {!currencyRates}/>
            </Box>

            <Box sx={{ mb: 2, display: 'flex', justifyContent: "space-between" }}>
                <ThemeProvider theme={theme}>
                    <Button variant='outlined' startIcon={<ImportExportIcon />} sx={buttonStyles} color='neutral' onClick={onBtnClick} />
                    <Box sx={{ p: "12px", display: 'flex', alignItems: "center" }} bgcolor='ButtonShadow'>
                        {`1`}{currencies.find(el => el.value === mainCurrency).currencyIcon({ height: "15px" })} {' = '} {currentRate} {currencies.find(el => el.value === secondaryCurrency).currencyIcon({ height: "15px" })}
                    </Box>
                </ThemeProvider>
            </Box >

            <Box>
                <CurrencyDropDown currency={secondaryCurrency} setCurrency={setSecondaryCurrency} />
                <CurrencyInput inputValue={secondaryInputValue} setInputValue={setSecondaryInputValue} changeInputValue={changeSecondaryValue} disabled= {!currencyRates}/>
            </Box>

        </Box >
    );
}

export default CurrencyConverter;