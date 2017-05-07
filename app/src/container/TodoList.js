import React, { Component } from 'react';
import        {connect}     from 'react-redux';
import './../styles/App.css';
import TodoItem from './../components/TodoItem'

class TodoList extends Component {
  render() {
    return (
        <div className="container">
          <div className="header">
            <input type="text" placeholder="Todo Text"/>
            <div className="state-info">
              <span className="element-count"> 7 Element lEFT</span>
              <span className="comp-element-count"> 5 Element is Completed </span>
            </div>
          </div>
          <div className="items">
            <ul>
              <TodoItem/>
            </ul>
          </div>
        </div>
    );
  }
}

function mapStateToProps (state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(TodoList);