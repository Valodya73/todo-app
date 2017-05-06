import React, { Component } from 'react';
import './../styles/App.css';

class TodoItem extends Component {
  constructor(props) {
    super(props);

  };

  render() {
    return (
      <li>
        <input type="checkbox"/>
        <span className="todo-text"> textkkdkdkdkdkdkkd </span>
        <span className="todo-remove">x</span>
      </li>
    );
  }
}

export default TodoItem;
