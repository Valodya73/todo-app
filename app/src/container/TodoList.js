import React, { Component } from 'react';
import        {connect}     from 'react-redux';
import './../styles/App.css';
import TodoItem from './../components/TodoItem';
import * as  creators from './../actions/Creators';
let id = 0;


class TodoList extends Component {

    constructor(props) {
        super(props);
    };

    addItem (event) {
        if(event.key === 'Enter') {
           this.props.dispatch(creators.addTodoItem(event.target.value, id ));
            id = id + 1;
            event.target.value = '';
        }
    };


    removeElement(element) {
        this.props.dispatch(creators.removeItem(element));
    };

    isCompleteElem(element) {
        element.isCompleted = !element.isCompleted;
        this.props.dispatch(creators.compliteItem(element));
    }



  render() {

      return (
        <div className="container">
          <div className="header">
            <input type="text" onKeyUp={(e) => {this.addItem(e)}} placeholder="Todo Text"/>
            <div className="state-info">
              <span className="element-count"> {this.props.store.Todos.list.length} Element lEFT</span>
              <span className="comp-element-count"> {this.props.store.Todos.list.filter((item)=> {
                  return item.isCompleted
              }).length} Element is Completed </span>
            </div>
          </div>
          <div className="items">
            <ul>
                {this.props.store.Todos.list.map((item) => {
                   return <TodoItem item = {item}
                                    onCrossClick={(elem) => {this.removeElement(elem)}}
                                    onComplete = {(elem) => {this.isCompleteElem(elem)}}/>;
                })}
            </ul>
          </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        store: state
    }
};

export default connect(mapStateToProps)(TodoList);