/**
 * Created by mv92 on 5/9/17.
 */

import React, { Component } from 'react';
import TodoItem from './TodoItem'
import './../styles/App.css';

class TodoList extends Component {
  constructor(props) {
    super(props);

  };

  componentWillReceiveProps(nextProps) {

  };


  render() {
    console.log('%c TODLIST COMPONENT', 'color: blue', this.props);
    return (
      <TodoItem item = {this.props.list}>
      </TodoItem>
    )
  }
}




export default TodoList;

