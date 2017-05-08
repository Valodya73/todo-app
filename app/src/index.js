import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from  'react-redux';
import {createStore} from 'redux';
import TodoList from './container/TodoList';
import reducers from  './reducers';
const store = createStore(reducers);
console.log('REDUX store : = :',store);

ReactDOM.render(
    <Provider  store={store}>
        <TodoList />
    </Provider>, document.getElementById('root')
);
