import React, { useState } from 'react';
import './App.css';
import {
  Container,
  Button,
  TextField,
  Typography,
  Box,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";

const App = () => {
  const [text, setText] = useState('');
  const [todoList, setTodoList] = useState<string[]>([]);

  const onAddText = () => {
    setTodoList([...todoList, text]);
    setText('');
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onAddText();
  };

  const handleTodoClick = (todo: string) => {
    alert(todo);
  };

  return (
    <div className="App">
      <Container component="main" maxWidth="xs">
        <Typography
          sx={{ mt: 4, textAlign: "center" }}
          component="h1"
          variant="h5"
        >
          Todoリスト
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSubmit}>
          <TextField
            fullWidth
            placeholder="ここに入力"
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            size="large"
            variant="contained"
            sx={{ my: 0 }}
          >
            追加
          </Button>
        </Box>
        <List>
          {todoList.map((todo, index) => (
            <ListItemButton key={index} onClick={() => handleTodoClick(todo)}>
              <ListItemText primary={todo} />
            </ListItemButton>
          ))}
        </List>
      </Container>
    </div>
  );
};

export default App;
