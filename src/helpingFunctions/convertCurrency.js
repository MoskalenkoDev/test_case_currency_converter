
export const convertCurrency = (mainCurrency, secondaryCurrency, countOfMoney, jsonResponse) => {
    let convertedMoney = 0;
    countOfMoney = Number(countOfMoney);
    convertedMoney = countOfMoney / jsonResponse.rates[mainCurrency] * jsonResponse.rates[secondaryCurrency];
    return Number(convertedMoney.toFixed(2));
}