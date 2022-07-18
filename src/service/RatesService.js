
export class RatesService {

    static getCurrencyRates = (baseCurrency, currenciesToExtract, requestOptions) => {
        return fetch(`https://api.apilayer.com/exchangerates_data/latest?symbols=${currenciesToExtract}&base=${baseCurrency}`, requestOptions);
    }
}
