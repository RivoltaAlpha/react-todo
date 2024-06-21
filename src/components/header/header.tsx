import { useState } from 'react';
import { HeaderProps } from '../../types/types';

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
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Add a new task" 
      />
      <button onClick={handleAddTodo}>Add</button>
    </header>
  );
};

export default Header;