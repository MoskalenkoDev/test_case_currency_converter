import { grey } from '@mui/material/colors';

export const boxInputWrapperStyles = {

    border: `2px solid ${grey[300]}`,
    boxShadow: `0 3px 13px rgb(0 0 0 / 0.1), inset 0 0 5px rgb(0 0 0 / 0.1)`,
    borderRadius: "8px",
    p: 3,
    display: 'flex',
    flexDirection: 'column',
}

export const buttonStyles = [
    {
        '& .MuiButton-startIcon': { mr: 0, ml: 0 }
    },
    {
        minWidth: 56, 
        minHeight: 40, 
        '&:hover': {borderColor: grey[400]}
    }
];

export const rateViewStyles = { 
    p: "12px", 
    display: 'flex', 
    alignItems: "center" 
}