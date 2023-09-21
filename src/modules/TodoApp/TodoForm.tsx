import React, { useState } from 'react';
import styles from './TodoForm.module.css';
import { IAddTodo, OnSubmit } from './todo.types';
import EnterButton from './Assets/EnterButton.svg';

export const TodoForm = ({ addTodo }: IAddTodo) => {
  const [text, setText] = useState('');
  const onSubmitHandler: OnSubmit = (event) => {
    event.preventDefault();
    addTodo(text);
    setText('');
  };

  return (
    <form className={styles.todoFormContainer} onSubmit={onSubmitHandler}>
      <input
        placeholder="Enter your item"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button type="submit" title="Submit" disabled={!text} className={styles.enterButton}>
        <img src={EnterButton} className={styles.enterIcon} />
      </button>
    </form>
  );
};
