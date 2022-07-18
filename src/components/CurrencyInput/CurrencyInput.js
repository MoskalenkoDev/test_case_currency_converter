import {FormControl,Input} from '@mui/material';
import '../../styles/CurrencyInput.css';

const CurrencyInput = ({inputValue, setInputValue, changeInputValue, disabled}) => {

    const onInputHandler = (e) => {
        let finalArr = [];
        let pattern = /[-0-9|.]/gm; // accept only numbers, dots and (-) hyphen
        let str = e.target.value?.replace(',', '.').match(pattern) || [""]; // replaces comma to dot in e.target.value and matches by regex pattern above
        let newStr = [];
        
        str.forEach(el => { // here we remove unnecessary hyphens and dots
            if(el === '-' && newStr.length) return;
            else if(newStr.includes('.') && el === '.') return;
            else newStr.push(el);
        });

        newStr.forEach((el) => { // here we remove unnecessary zeros
            if(finalArr[finalArr.length - 3] === '.') return;
            if(el === '.' || el === '-') finalArr.push(el);
            else if(el === '0' && ((finalArr[0] === '-' && finalArr.length === 1 ) || !finalArr.length || finalArr.includes('.') || /[1-9]/.test(finalArr.join(''))) ) finalArr.push(el);
            else if(/[1-9]/.test(finalArr.join('')) || finalArr.includes('.') || finalArr.length === 1 && finalArr[0] !== '0' ) finalArr.push(el);
            else {finalArr.pop(); finalArr.push(el)};
        });

        if(finalArr[0] === '.') finalArr = ['0', ...finalArr]; // if we start with a dot, we add a zero to the beginning of the line
        else if(finalArr[0] === '-' && finalArr[1] === '.') finalArr.splice(1, 0, '0'); // if string looks like -.53 we change it to -0.53
        let result = finalArr.join('');
        setInputValue(result);
        changeInputValue(result);
    }

    return (
        <FormControl variant='standard' disabled = {disabled}>
            <Input
                id="standard-adornment-password"
                placeholder={'200'}
                value= {inputValue}
                className={"overrideInput"}
                onInput = {onInputHandler}
            />
        </FormControl>
    );
}

export default CurrencyInput;
