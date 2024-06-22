import { useState } from 'react';
import { HeaderProps } from '../../types/types';
import "./header.scss"
const Header = ({ addTodo } :HeaderProps) => {
  const [text, setText] = useState('');

  const handleAddTodo = () => {
    if (text.trim()) {
      addTodo(text);
      setText('');
    }
  };

  
  return (
    <header>
      <div className='todo'>
      <h1>TODO</h1>
      </div>
      <div className='input'>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Add a new task" 
      />
      <button onClick={handleAddTodo}>Add</button>
      </div>

    </header>
  );
};

export default Header;
