import { useEffect, useState } from 'react';
import { Box, Button } from '@mui/material';
import CurrencyDropDown from '../CurrencyDropDown/CurrencyDropDown';
import { currencies } from '../currencies';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import CurrencyInput from '../CurrencyInput/CurrencyInput';
import { boxInputWrapperStyles, buttonStyles, rateViewStyles } from '../../styles/CurrencyConverterStyles'; 
import { RatesController } from '../../controllers/RatesController';
import { convertCurrency } from '../../helpingFunctions/convertCurrency';

const CurrencyConverter = ({currencyRates, setCurrencyRates}) => {

    const [mainCurrency, setMainCurrency] = useState('USD');
    const [secondaryCurrency, setSecondaryCurrency] = useState('UAH');
    const [currentRate, setCurrentRate] = useState('...');

    const [mainInputValue, setMainInputValue] = useState('');
    const [secondaryInputValue, setSecondaryInputValue] = useState('');



    const onBtnClick = () => {
        let [mainSwitchedCurrency, secondarySwitchedCurrency] = [secondaryCurrency, mainCurrency];
        let [mainSwithedInputValue, secondarySwithedInputValue] = [secondaryInputValue, mainInputValue];
        setMainCurrency(mainSwitchedCurrency);
        setSecondaryCurrency(secondarySwitchedCurrency);
        setMainInputValue(mainSwithedInputValue);
        setSecondaryInputValue(secondarySwithedInputValue);
    }

    const getCurrencyRates = async () => {
        let response = await RatesController.getCurrencyRates();
        setCurrencyRates(response);
        let rate = convertCurrency(mainCurrency, secondaryCurrency, 1, response);
        setCurrentRate(rate);
    }

    useEffect(() => {
        getCurrencyRates();
    }, [])

    useEffect(() => {
        if (currencyRates) {
            let rate = convertCurrency(mainCurrency, secondaryCurrency, 1, currencyRates);
            setCurrentRate(rate);
            let convertedValue = convertCurrency(mainCurrency, secondaryCurrency, mainInputValue, currencyRates);
            setSecondaryInputValue(convertedValue ? convertedValue: "");
        }
    }, [mainCurrency, secondaryCurrency])

    const changeMainValue = (currentValue) => {
        let convertedValue = convertCurrency(mainCurrency, secondaryCurrency, currentValue, currencyRates);
        setSecondaryInputValue(convertedValue ? convertedValue: "");
    }

    const changeSecondaryValue = (currentValue) => {
        let convertedValue = convertCurrency(secondaryCurrency, mainCurrency, currentValue, currencyRates);
        setMainInputValue(convertedValue ? convertedValue: "");
    }

    const isDisabled = !currencyRates;
    return (
        <Box sx={boxInputWrapperStyles}>

            <Box sx={{ mb: 2}}>
                <CurrencyDropDown currency={mainCurrency} setCurrency={setMainCurrency}  disabled= {isDisabled}/>
                <CurrencyInput inputValue={mainInputValue} setInputValue={setMainInputValue} changeInputValue = {changeMainValue} disabled= {isDisabled}/>
            </Box>

            <Box sx={{ mb: 2, display: 'flex', justifyContent: "space-between" }}>
                    <Button variant='outlined' startIcon={<ImportExportIcon />} sx={buttonStyles} color='neutral' onClick={onBtnClick} disabled= {isDisabled}/>
                    <Box sx={rateViewStyles} bgcolor='ButtonShadow'>
                        {`1`}
                        {currencies.find(el => el.value === mainCurrency).currencyIcon({ height: "15px" })} 
                        {' = '} 
                        {currentRate} 
                        {currencies.find(el => el.value === secondaryCurrency).currencyIcon({ height: "15px" })}
                    </Box>
            </Box >

            <Box>
                <CurrencyDropDown currency={secondaryCurrency} setCurrency={setSecondaryCurrency} disabled= {isDisabled}/>
                <CurrencyInput inputValue={secondaryInputValue} setInputValue={setSecondaryInputValue} changeInputValue={changeSecondaryValue} disabled= {isDisabled}/>
            </Box>

        </Box >
    );
}

export default CurrencyConverter;