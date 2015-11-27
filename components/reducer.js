let initialState = {
  todos: []
};

const todoReducer = function(state = initialState, action) {
  switch (action.type) {
    case 'ADD_ITEM': 
      return (
        Object.assign({}, state, {
          todos: [
            ...state.todos,
            {
              text: action.text,
              status: false,
              index: state.todos.length
            }
          ]
        })
      );
      break;
    case 'CHANGE_STATUS':
      return (
        Object.assign({}, state, {
          todos: [
            ...state.todos.slice(0, action.index), 
            Object.assign({}, state.todos[action.index], {
              status: action.status
            }), 
            ...state.todos.slice(action.index + 1)
          ]
        })
      );
      break;
    default:
      return state;
  }
}

export default todoReducer;