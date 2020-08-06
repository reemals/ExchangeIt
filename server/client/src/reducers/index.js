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

const allReducers = combineReducers({
});

const store = createStore(allReducers, applyMiddleware(thunk))

export default store;
