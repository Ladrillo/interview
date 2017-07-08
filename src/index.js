import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas';
import rootReducer from './reducers';

import App from './components/app/App';
import './index.css';


const sagaMiddleware = createSagaMiddleware();
const createStoreWithMiddleware = applyMiddleware(sagaMiddleware)(createStore);
const store = createStoreWithMiddleware(
    rootReducer,
    {},
    window.devToolsExtension ? window.devToolsExtension() : undefined
);

const render = () => ReactDOM.render(
    <Provider store={store}><App /></Provider>,
    document.getElementById('root')
);

sagaMiddleware.run(rootSaga);
render();
store.subscribe(render);