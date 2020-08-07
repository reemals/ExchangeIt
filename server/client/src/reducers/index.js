import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';

/* Example */
/*const reviewReducer = (reviewList = {}, action) => {
    if (action.type === 'FETCHED_REVIEWS') {
        return action.data;
    }
    return reviewList;
};
*/

const conversionReducer = (exchangeRate = '', action) => {
    if (action.type === 'FETCHED_EXCHANGE_RATE') {
        console.log(action.data);
        return Object.values(action.data.rates)[0];
    }
    return exchangeRate;
}

const allReducers = combineReducers({
    exchangeRate: conversionReducer
});

const store = createStore(allReducers, applyMiddleware(thunk))

export default store;
