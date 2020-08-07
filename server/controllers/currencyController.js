const fetch = require('node-fetch');
const service = require('../services/currencyService');

const baseUrl = 'https://api.exchangeratesapi.io/latest';

const CurrencyController = {
    getExchangeRate: (from, to) => {
        return service.getExchangeRate(from, to)
            .then((data) => Promise.resolve(data))
            .catch(err => Promise.reject(err));
    },

    convertCurrency: (from, to, amount) => {
        return fetch(`${baseUrl}?base=${from}&symbols=${to}`)
            .then((resp) => resp.json())
            .then((data) => {
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