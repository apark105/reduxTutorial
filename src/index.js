import React from 'react';
import { render } from 'react-dom';
import './assets/css/index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers'

const store = createStore(rootReducer); 

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);


