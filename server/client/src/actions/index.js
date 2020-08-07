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
