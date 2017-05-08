import React, { Component } from 'react';
import './../styles/App.css';
// debugger;
class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
        isCompleted: this.props.item.isCompleted
    }
  };


    componentWillReceiveProps(nextProps) {
        this.setState({
            isCompleted: nextProps.item.isCompleted,
        });
    };


  render() {
    return (
      <li>
        <input type="checkbox" defaultChecked={this.props.item.isCompleted} onChange={ ()=> this.props.onComplete(this.props.item)}/>
        <span className="todo-text"> {this.props.item.title} </span>
        <span className="todo-remove" onClick={ () => this.props.onCrossClick(this.props.item)}>x</span>
      </li>
    );
  }
}



export default TodoItem;
