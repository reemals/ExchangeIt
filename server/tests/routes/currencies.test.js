const app = require('../../app');
const supertest = require('supertest');
const request = supertest(app);
const mongoose = require("mongoose");
const {setupDB } =require("../setupMongo");

describe("Currencies endpoints tests", () => {
    const endpoint = '/currencies';

    setupDB();

    beforeEach(() => {
        fetch.resetMocks()
    });

    describe(`${endpoint}/ tests`, () => {
        it("should respond with correct rates to GET if success", () => {
            const expectedRate = {
                "rates": {
                    "EUR": 0.843597098
                },
                "base": "USD",
                "date": "2020-08-05"
            };
            fetch.mockResponseOnce(JSON.stringify(expectedRate));
            return request
                .get(`${endpoint}/`)
                .query({
                    from: "USD",
                    to: "EUR"
                }).then(response => {
                    expect(fetch).toHaveBeenCalledTimes(1);
                    expect(fetch).toHaveBeenCalledWith(`https://api.exchangeratesapi.io/latest?base=USD&symbols=EUR`);
                    expect(response.status).toBe(200);
                    expect(response.body).toEqual(expectedRate);
                })
        });

        it("should respond with error to GET if fail", () => {
            const mockError = "error";
            fetch.mockReject(() => Promise.reject(mockError));
            return request
                .get(`${endpoint}/`)
                .query({
                    from: "USD",
                    to: "EUR"
                }).then(response => {
                    expect(fetch).toHaveBeenCalledTimes(1);
                    expect(fetch).toHaveBeenCalledWith(`https://api.exchangeratesapi.io/latest?base=USD&symbols=EUR`)
                    expect(response.status).toBe(500);
                })
        })
    });

    describe(`${endpoint}/exchange`, () => {
        const USDToEUR = 0.843597098;
        const USDamount = 100;
        it ("should respond with correct exchanged amount on success", () => {
            const mockRate = {
                "rates": {
                    "EUR": 0.843597098
                },
                "base": "USD",
                "date": "2020-08-05"
            };
            const expectedResult = {
                converted: USDamount * USDToEUR,
                rate: USDToEUR
            };
            fetch.mockResponseOnce(JSON.stringify(mockRate));
            return request
                .get(`${endpoint}/exchange`)
                .query({
                    from: "USD",
                    to: "EUR",
                    amount: USDamount
                }).then(response => {
                    expect(fetch).toHaveBeenCalledTimes(1);
                    expect(fetch).toHaveBeenCalledWith(`https://api.exchangeratesapi.io/latest?base=USD&symbols=EUR`);
                    expect(response.status).toBe(200);
                    expect(response.body).toEqual(expectedResult);
                })
        });

        it ("should respond with error on fail", () => {
            const mockError = "error";
            fetch.mockReject(() => Promise.reject(mockError));
            return request
                .get(`${endpoint}/exchange`)
                .query({
                    from: "USD",
                    to: "EUR",
                    amount: USDamount
                }).then(response => {
                    expect(fetch).toHaveBeenCalledTimes(1);
                    expect(fetch).toHaveBeenCalledWith(`https://api.exchangeratesapi.io/latest?base=USD&symbols=EUR`);
                    expect(response.status).toBe(500);
                })
        });
    });
});


