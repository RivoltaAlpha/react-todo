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
  }
  