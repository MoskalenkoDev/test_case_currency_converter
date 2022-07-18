import {ReactComponent as DollarIcon} from '../icons/dollar.svg';
import {ReactComponent as EuroIcon} from '../icons/euro.svg';
import {ReactComponent as HryvniaIcon} from '../icons/hryvnia.svg';
import Flag from 'react-world-flags'

const iconsStyle = {
    height: "15px",
    padding: '0px 4px 0px 6px',
    marginBottom: '2px'
}

const flagsStyle = { 
    width: "20px",  
    marginBottom: "3px", 
    marginRight: "8px" 
}

export const currencies = [
    {
        value: 'USD',
        currencyIcon: (style = iconsStyle) => <DollarIcon style={style} id="ddf"/>,
        flag: <Flag className="flag" code='USA' style={flagsStyle} />
    },
    {
        value: 'EUR',
        currencyIcon: (style = iconsStyle) =>  <EuroIcon style={style}/>,
        flag: <Flag className="flag" code={'EU'} style={flagsStyle} />
    },
    {
        value: 'UAH',
        currencyIcon: (style = iconsStyle) =>  <HryvniaIcon style={style}/>,
        flag: <Flag className="flag" code={'UA'} style={flagsStyle} />
    },
];