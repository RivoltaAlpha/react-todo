import { useState } from 'react';
import { BodyProps } from '../../types/types';
import "./body.scss"
const Body= ({ todos, completeTodo, deleteTodo, updateTodo, clearCompleted }: BodyProps) => {
  const [filter, setFilter] = useState<string>('all');
  const [editText, setEditText] = useState<{ [key: number]: string }>({});

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });
  
  const handleEditChange = (id: number, text: string) => {
    setEditText((prev) => ({
      ...prev,
      [id]: text,
    }));
  };

  return (
    <div className="body">
      <ul>
        {filteredTodos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => completeTodo(todo.id)}
              />
              <input
              type="text"
              value={editText[todo.id] || todo.text}
              onChange={(e) => handleEditChange(todo.id, e.target.value)}
            />
            <button onClick={() => updateTodo(todo.id, editText[todo.id] || todo.text)}>🖊</button>
            <button onClick={() => deleteTodo(todo.id)}>🗑️</button>
          </li>
        ))}
      </ul>
      <div className="filters">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('active')}>Active</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
      </div>
      <button onClick={clearCompleted} className="clear-completed">
        Clear Completed
      </button>
    </div>
  );
};

export default Body;
