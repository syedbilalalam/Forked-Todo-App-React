// reducers.js
import {
    ADD_TODO,
    EDIT_TODO,
    REMOVE_TODO,
    MARK_COMPLETED,
    MARK_INCOMPLETE,
    FILTER_TODOS,
    MARK_ALL_COMPLETED,
    UPDATE_SEARCH_TERM,
  } from './actionTypes';
  
  export const updateTodoSession = (todos) => {
    localStorage.setItem(
      'todoSession',
      JSON.stringify(todos)
    );
  }
  
  const initialTodos = (()=>{
    let todos = [];

    const todoSession = localStorage.getItem('todoSession');
    if (!todoSession) return todos;
    
    try {
      const parsedTodos = JSON.parse(todoSession);
      return parsedTodos;
    }
    catch {
      return todos;
    }
  })();
  
  const initialState = { todos: initialTodos, filter: 'ALL', searchTerm: '' };
  
  const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TODO:
        return {
          todos: [...state.todos, { text: action.payload.text, completed: false }],
          filter: state.filter,
          searchTerm: state.searchTerm,
        };
  
        case EDIT_TODO:
            return {
                todos: state.todos.map((todo, index) =>
                    index === action.payload.id 
                      ? { ...todo, text: action.payload.newText } // Update the text of the todo
                      : todo
                  ),
                  filter: state.filter,
                  searchTerm: state.searchTerm,
         
            };
  
      case REMOVE_TODO:
        return {
          todos: state.todos.filter((todo, index) => index !== action.payload.id),
          filter: state.filter,
          searchTerm: state.searchTerm,
        };
  
      case MARK_COMPLETED:
        return {
          todos: state.todos.map((todo, index) =>
            index === action.payload.id ? { ...todo, completed: true } : todo
          ),
          filter: state.filter,
          searchTerm: state.searchTerm,
        };
  
      case MARK_INCOMPLETE:
        return {
          todos: state.todos.map((todo, index) =>
            index === action.payload.id ? { ...todo, completed: false } : todo
          ),
          filter: state.filter,
          searchTerm: state.searchTerm,
        };
  
      case FILTER_TODOS:
        return {
          todos: state.todos,
          filter: action.payload.filter,
          searchTerm: state.searchTerm,
        };
  
      case UPDATE_SEARCH_TERM:
        return {
          todos: state.todos,
          filter: state.filter,
          searchTerm: action.payload.searchTerm,
        };
  
      case MARK_ALL_COMPLETED:
        return {
          todos: state.todos.map((todo) => ({ ...todo, completed: true })),
          filter: state.filter,
          searchTerm: state.searchTerm,
        };
  
      default:
        return state;
    }
  };
  
  export default todoReducer;