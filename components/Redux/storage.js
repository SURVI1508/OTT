import {
    legacy_createStore as createStore,
    applyMiddleware,
    combineReducers,
} from "redux";

import logger from "redux-logger";
import thunk from "redux-thunk";
import GET_TOP_STORIES from './Reducer/getTopStories.reducer'
const middleware = applyMiddleware(logger, thunk);

const root = combineReducers({
    GET_TOP_STORIES

});

const storage = createStore(root, {}, middleware);

export default storage;