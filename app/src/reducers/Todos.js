/**
 * Created by mv92 on 5/6/17.
 */

import * as types from './../actions/ActionsType'
let initialState = {list: [{key: 'test-value'}]};

const Todos = (state = initialState, action) => {
    switch (action.type) {
      case types.ADD_TODO:
          state.list.push({
              title: action.title,
              isCompleted: false,
              id: action.id,
          });
          return Object.assign({}, state,{
              list: state.list,
          });
        case types.REMOVE_TODO:
            let arr = state.list;
            const index = arr.indexOf(action.element);
            if (index > -1) {
                arr.splice(index, 1)
            }
            return Object.assign({}, state, {
                todoList: arr,
            });

        case 'COMPLETE_TODO':
            const array = state.list;
            array.forEach((i) => {
                if (i.id === action.element.id) {
                    i.isCompleted = action.element.isCompleted;
                    console.log(state.list)
                }
            });
            return Object.assign({}, state, {
                list: array,
            });

        default:
            return state;
    }
    return state
};

export default Todos;