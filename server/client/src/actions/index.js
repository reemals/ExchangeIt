/* an example */
/*
export const fetchCourses = (currentPage) => {
    return function (dispatch, getState) {
        const url = `/courses?page=` + currentPage;
        return fetch(url)
            .then(
                data => data.json())
            .then(data => {
                    dispatch(change_page_count(data['pageCount']))
                    dispatch(fetched_courses(data['data']))
                }
            )
            .catch(err => console.log(err));
    };
};
*/

//TODO: implement once endpoint is done
export const fetchCurrencies = currencyList => {
    return {
        type: "FETCHED_CURRENCIES",
        data: currencyList
    };
};

export const fetchExchangeRate = (curr1, curr2) => {
    return function(dispatch, getState) {
        const url = `/currencies?from=` + curr1 + `&to=` + curr2;
        return fetch(url)
            .then(
                data => data.json())
            .then(data => {
                    dispatch(fetched_exchange(data));
                }
            )
            .catch(err => console.log(err));
    };
};

export const fetched_exchange = data => {
    console.log(data);
    return {
        type: "FETCHED_EXCHANGE_RATE",
        data: data
    };
};
