/**
 * Created by mv92 on 5/6/17.
 */

import * as types from './ActionsType'

console.log(types.ADD_TODO);

export const addTodoItem =  ((title,id)=>{
  return {
    type : types.ADD_TODO,
    title : title,
    id :id
  }
});

export const compliteItem = ((item)=>{
  return {
    type: types.COMPLETE_TODO,
    element: item
  }
});

export const removeItem = ((item)=>{
  return {
    type: types.REMOVE_TODO,
    element: item
  }
});
