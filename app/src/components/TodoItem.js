import React, { Component } from 'react';
import './../styles/App.css';
import        {connect}     from 'react-redux';
class TodoItem extends Component {
  constructor(props) {
    super(props);

  };

  componentWillReceiveProps(nextProps) {

  };


  render() {
    console.log('%c TODOITEM COMPONENT', 'color: blue', this.props.item);
    return (
      <h1> TodoItem Component</h1>
    );
  }
}




export default TodoItem;
