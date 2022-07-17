import React from 'react';
import { pink } from '@mui/material/colors';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import EuroOutlinedIcon from '@mui/icons-material/EuroOutlined';
import { AppBar, Box, Toolbar, Typography, Container } from '@mui/material';
import { styledBox, styledTypography } from './HeaderStyles';

const Header = () => {

    return (
        <AppBar position="static" sx={{ bgcolor: pink[900] }}>
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
                                36.4963 / 36.4923
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
                                37.4463 / 39.4953
                            </Typography>
                        </Box>
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;
