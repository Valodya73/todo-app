import React, { Component } from 'react';
import './../styles/App.css';

class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // isComplete: this.props.item.isComplete
    };

  };

  render() {
    return (
      <li>
        <input type="checkbox"/>
        <span className="todo-text"> Learn Redux </span>
        <span className="todo-remove">x</span>
      </li>
    );
  }
}

export default TodoItem;
