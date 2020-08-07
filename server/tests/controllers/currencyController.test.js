const {getExchangeRate, convertCurrency} = require('../../controllers/currencyController');

describe("CurrencyController tests", () => {

    beforeEach(() => {
        fetch.resetMocks()
    });

    describe("getExchangeRate", () => {
        it("should resolve with rates on success", () => {
            const mockRate = {
                "rates": {
                    "EUR": 0.843597098
                },
                "base": "USD",
                "date": "2020-08-05"
            };
            fetch.mockResponseOnce(JSON.stringify(mockRate));
            expect(getExchangeRate("USD", "EUR")).resolves.toEqual(mockRate);
            expect(fetch).toHaveBeenCalledTimes(1);
            expect(fetch).toHaveBeenCalledWith(`https://api.exchangeratesapi.io/latest?base=USD&symbols=EUR`);
        });

        it("should reject with error on fail", () => {
            const mockError = "error";
            fetch.mockReject(() => Promise.reject(mockError));
            expect(getExchangeRate("USD", "EUR")).rejects.toEqual(mockError);
            expect(fetch).toHaveBeenCalledWith(`https://api.exchangeratesapi.io/latest?base=USD&symbols=EUR`)
        })
    });

    describe("convertCurrency", () => {
        const USDToEUR = 0.843597098;
        const USDamount = 100;
        const mockRate = {
            "rates": {
                "EUR": 0.843597098
            },
            "base": "USD",
            "date": "2020-08-05"
        };

        it("should resolve  with converted amount", () => {
            const expectedResult = {
                converted: USDamount * USDToEUR,
                rate: USDToEUR
            };
            fetch.mockResponseOnce(JSON.stringify(mockRate));
            expect(convertCurrency("USD", "EUR", USDamount)).resolves.toEqual(expectedResult);
            expect(fetch).toHaveBeenCalledTimes(1);
            expect(fetch).toHaveBeenCalledWith(`https://api.exchangeratesapi.io/latest?base=USD&symbols=EUR`);
        });

        it("should reject with error on fail", () => {
            const mockError = "error";
            fetch.mockReject(() => Promise.reject(mockError));
            expect(convertCurrency("USD", "EUR", USDamount)).rejects.toEqual(mockError);
            expect(fetch).toHaveBeenCalledWith(`https://api.exchangeratesapi.io/latest?base=USD&symbols=EUR`)
        })
    })
});