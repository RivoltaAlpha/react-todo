// src/types.ts
export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export interface HeaderProps {
  addTodo: (text: string) => void;
}

export interface WrapperProps {
  children: React.ReactNode;
}

export interface BodyProps {
  todos: Todo[];
  completeTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  updateTodo: (id: number, text: string) => void;
  clearCompleted: () => void;
}

export type Action =
  | { type: 'ADD_TODO'; payload: string }
  | { type: 'COMPLETE_TODO'; payload: number }
  | { type: 'DELETE_TODO'; payload: number }
  | { type: 'UPDATE_TODO'; payload: { id: number; text: string } }
  | { type: 'CLEAR_COMPLETED' };