import { BodyProps } from '../../types/types';

const Body= ({ todos, completeTodo, deleteTodo, updateTodo }: BodyProps) => {
  return (
    <ul className='list'>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input 
            type="checkbox" 
            checked={todo.completed} 
            onChange={() => completeTodo(todo.id)} 
          />
          <input 
            type="text" 
            value={todo.text} 
            onChange={(e) => updateTodo(todo.id, e.target.value)} 
          />
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default Body;
