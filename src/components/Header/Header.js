import React from 'react';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import EuroOutlinedIcon from '@mui/icons-material/EuroOutlined';
import { AppBar, Box, Toolbar, Typography, Container } from '@mui/material';
import { styledBox, styledTypography } from '../../styles/HeaderStyles';
import { convertCurrency } from '../../helpingFunctions/convertCurrency';

const Header = ({currencyRates}) => {
    console.log(currencyRates)
    return (
        <AppBar position="static" color= 'neutral'>
            <Container maxWidth='xl'>
                <Toolbar disableGutters>
                    <CurrencyExchangeIcon sx={{ mr: 1, fontSize: '1.9rem' }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="span"
                        sx={{
                            mr: 2,
                            ...styledTypography
                        }}
                    >
                        Currency Converter
                    </Typography>

                    <Box sx={{
                        ...styledBox, ml: 'auto',
                    }}>
                        <Box sx={styledBox}>
                            <AttachMoneyIcon />
                            <Typography
                                sx={styledTypography}
                                component="span"
                            >
                                {currencyRates?.rates['UAH'].toFixed(2) || '0000'}
                            </Typography>
                        </Box>

                        <Box sx={{
                            ...styledBox, ml: 2,
                        }}>
                            <EuroOutlinedIcon sx={{ mr: '4px' }} />
                            <Typography
                                sx={styledTypography}
                                component="span"
                            >
                                {currencyRates ? convertCurrency("EUR","UAH", 1, currencyRates) : '0000'}
                            </Typography>
                        </Box>
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;
