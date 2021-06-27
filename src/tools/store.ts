import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {rootReducer} from '../reducers';


// export const useAppSelector: TypedUseSelectorHook<rootReducer> = useSelector
// const store = createStore(rootReducer, composeWithDevTools(
//     applyMiddleware(...[thunk]),

// ));

// // const store = createStore(reducers, applyMiddleware(thunk));

// export default store;