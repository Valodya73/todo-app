import React from 'react';
import ReactDOM from 'react-dom';
import Provider from  'redux';
import {createStore} from 'redux';
import TodoList from './container/TodoList';
import reducers from  './reducers';
const store = createStore(reducers);


ReactDOM.render(
    <Provider Todo = {store}>
        <TodoList />
    </Provider> , document.getElementById('root')
);
