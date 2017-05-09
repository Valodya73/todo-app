// import React, { Component } from 'react';
import        {connect}     from 'react-redux';
import        TodoList from './../components/TodoList';

const mapStateToProps = state => ({
  list : state.Todos.list
});
export default connect(mapStateToProps)(TodoList);