/**
 * Created by mv92 on 5/6/17.
 */

import * as types from './../actions/ActionsType'
let initialState = {list: []};

const Todos = (state = initialState, action) =>{
    switch (action.type) {
      case types.ADD_TODO:
        /* logic to add todoItem */
      case types.REMOVE_TODO:
      /* logic to remove todoItem */
      case types.COMPLETE_TODO:
      /* logic to complete todoItem */
    };
};