const fetch = require('node-fetch');

const baseUrl = 'https://api.exchangeratesapi.io/latest';

const CurrencyController = {
    getExchangeRate: (from, to) => {
        return fetch(`${baseUrl}?base=${from}&symbols=${to}`)
            .then((resp) => resp.json())
            .then((data) => Promise.resolve(data))
            .catch(err => Promise.reject(err));
    },

    convertCurrency: (from, to, amount) => {
        return fetch(`${baseUrl}?base=${from}&symbols=${to}`)
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data);
                const rate = data.rates[to];
                const coverted = amount * rate;
                return Promise.resolve({
                    converted: coverted,
                    rate: rate
                })
            })
            .catch(err => Promise.reject(err));
    },
};

module.exports = CurrencyController;