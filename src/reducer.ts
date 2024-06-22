// src/reducer.ts
import { Todo,Action } from './types/types';

const todoReducer = (state: Todo[], action: Action): Todo[] => {
  switch (action.type) {
    case 'ADD_TODO':
      const newTodo: Todo = {
        id: Date.now(),
        text: action.payload,
        completed: false
      };
      return [...state, newTodo];
    case 'COMPLETE_TODO':
      return state.map(todo =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.payload);
    case 'UPDATE_TODO':
      return state.map(todo =>
        todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
      );
      case 'CLEAR_COMPLETED':
        return state.filter((todo) => !todo.completed);
    default:
      return state;
  }
};

export default todoReducer;