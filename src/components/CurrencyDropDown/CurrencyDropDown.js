import { useRef, useState } from 'react';
import {  MenuItem, FormControl, Select, } from '@mui/material';
import { currencies } from '../currencies';
import '../../styles/CurrencyDropDown.css';

const CurrencyDropDown = ({currency, setCurrency, disabled}) => {

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
                className={"overrideSelect"}
                value={currency}
                onChange={handleChange}
                onOpen={handleChangeFocused}
                onClose={handleChangeFocused}
                variant="standard"
                MenuProps={{ anchorEl: selectRef.current, className: "overrideMenu" }}
                disabled= {disabled}
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
