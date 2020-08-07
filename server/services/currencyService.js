const baseUrl = 'https://api.exchangeratesapi.io/latest';

const CurrencyService = {
    getExchangeRate: (from, to) => {
        return fetch(`${baseUrl}?base=${from}&symbols=${to}`)
            .then((resp) => resp.json());
    }
};

module.exports = CurrencyService;