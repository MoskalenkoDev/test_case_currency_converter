import { useRef, useEffect, useState } from 'react';
import { Box, TextField, MenuItem, FormControl, InputLabel, Select, Input, ListItemIcon, SvgIcon } from '@mui/material';
import { currencies } from '../currencies';
import './CurrencyDropDown.css';

const CurrencyDropDown = ({currency, setCurrency}) => {

    const [focused, setFocused] = useState(false);

    const selectRef = useRef();

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };

    const handleChangeFocused = () => {
        setFocused(prevFocused => !prevFocused);
    }

    return (
        <FormControl sx={{ minWidth: "100px", mr: "20px" }} focused={focused}>
            <Select
                id="outlined-select-currency"
                ref={selectRef}
                className={"overrideClass"}
                value={currency}
                onChange={handleChange}
                onOpen={handleChangeFocused}
                onClose={handleChangeFocused}
                variant="standard"
                MenuProps={{ anchorEl: selectRef.current, className: "overrideMenu" }}
            >
                {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value} divider className='overrideMenuItem'>
                        {option.flag}
                        {option.value}
                        {option.currencyIcon()}
                    </MenuItem>
                ))}
            </Select>

        </FormControl>
    );
}

export default CurrencyDropDown;
