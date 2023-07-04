import React, { useState } from 'react';
import styles from './TodoForm.module.css';
import Button from '../UI/Button';
import { IAddTodo, OnSubmit } from './todo.types';

function TodoForm({ addTodo }: IAddTodo) {
  const [text, setText] = useState('');
  const onSubmitHandler: OnSubmit = (event) => {
    event.preventDefault();
    addTodo(text);
    setText('');
  };

  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSubmitHandler}>
        <input
          placeholder="Enter new item"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <Button type="submit" title="Submit" disabled={!text}>
          Enter
        </Button>
      </form>
    </div>
  );
}

export default TodoForm;
