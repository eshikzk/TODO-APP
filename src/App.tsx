import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [text, setText] = useState('');
  const [todoList, setTodoList] = useState<string[]>([]);

  const onAddText = () => {
    setTodoList([...todoList, text]);
    setText('');
  };

  return (
    <div className="App">
      <input
        placeholder="ここに入力"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button onClick={onAddText}>追加</button>
      <ul>
        {todoList.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;

