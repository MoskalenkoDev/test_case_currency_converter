import { RatesService } from "../service/RatesService";

export class RatesController {

    static getCurrencyRates = async(baseCurrency = 'USD', currenciesToExtract = 'USD,UAH,EUR') => {
        
        const myHeaders = new Headers();
        myHeaders.append("apikey", process.env.REACT_APP_CURRENCY_RATE_API_KEY); // apiKey is = n3g9sU6WpMiSZl0KotZssCHCJFrjaSwF (only for ITOP1000)

        const requestOptions = {
            method: 'GET',
            redirect: 'follow',
            headers: myHeaders
        };
        try {
            let response = await RatesService.getCurrencyRates(baseCurrency, currenciesToExtract, requestOptions);
            let jsonResponse = await response.json();
            return jsonResponse;
        }
        catch(e) {
            console.log(e);
            return {};
        }
    }
}