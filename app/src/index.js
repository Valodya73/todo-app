import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from  'react-redux';
import {createStore} from 'redux';
import TodoContainer from './container/TodoContainer';
import reducers from  './reducers';
const store = createStore(reducers);
console.log('%c REDUX STORE', 'color: red; font-size: 10px',store);

ReactDOM.render(
    <Provider  store={store}>
        <TodoContainer />
    </Provider>, document.getElementById('root')
);
