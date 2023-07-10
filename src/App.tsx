import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [text, setText] = useState("");
  const [addText, setAddText] = useState("");
  const onAddText = () => {
    setAddText(text);
    setText("");
  }
  return (
    <div className="App">
      <input
      placeholder="ここに書け"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button onClick={onAddText}>追加</button>
      <p>{addText}</p>
    </div>
  );
};

export default App;
