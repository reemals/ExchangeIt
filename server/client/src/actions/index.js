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

export const fetchExchangeRate = (curr1, curr2, amount) => {
    return function(dispatch, getState) {
        return fetch(`/reviews/`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                from: curr1,
                to: curr2,
                amount: amount
            }),
            credentials: 'include'
        })
            .then(
                data => data.json())
            .then(data => {
                dispatch(fetched_exchange_rate(data))}
            )
            .catch(err => console.log(err));
    };
};

export const fetched_exchange_rate = data => {
    console.log(data);
    return {
        type: "FETCHED_EXCHANGE_RATE",
        data: data
    };
};
