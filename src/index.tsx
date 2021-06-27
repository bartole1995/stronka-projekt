import ReactDOM from 'react-dom';
import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { Reset } from 'styled-reset';

import MainPage from './components/MainPage/MainPage';
import { rootReducer } from './reducers';

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()


export const useAppSelector: TypedUseSelectorHook<typeof  rootReducer> = useSelector
const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(...[thunk]),

));
ReactDOM.render(

  <Provider store={store}>
    <Reset />

    <MainPage />
  </Provider>,

  document.getElementById('root')
);

