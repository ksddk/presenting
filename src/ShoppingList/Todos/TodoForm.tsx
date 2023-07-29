import React, { useState } from 'react';
import styles from './TodoForm.module.css';
import Button from '../UI/Button';
import { IAddTodo, OnSubmit } from './todo.types';
import EnterButton from './EnterButton.svg';

function TodoForm({ addTodo }: IAddTodo) {
  const [text, setText] = useState('');
  const onSubmitHandler: OnSubmit = (event) => {
    event.preventDefault();
    addTodo(text);
    setText('');
  };

  return (
    <form className={styles.todoFormContainer} onSubmit={onSubmitHandler}>
      <input
        style={{ width: '100%' }}
        placeholder="Enter your item"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <Button type="submit" title="Submit" disabled={!text}>
        {/* className={styles.EnterButton} */}
        <img src={EnterButton} />
      </Button>
    </form>
  );
}

export default TodoForm;
