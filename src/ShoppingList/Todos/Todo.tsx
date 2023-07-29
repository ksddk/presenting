import React from 'react';
import styles from './Todo.module.css';
import { ITodo, ITodoProps } from './todo.types';
import TrashBin from './TrashBin.svg';
import Tick from './Tick.svg';

function Todo({ todo, deleteTodo, toggleTodo }: ITodoProps) {
  return (
    <div className={`${styles.todo} ${todo.isCompleted ? styles.completedTodo : ''}`}>
      <img src={Tick} className={styles.checkIcon} onClick={() => toggleTodo(todo.id)} />
      <div className={styles.todoText}>{todo.text}</div>
      <img src={TrashBin} className={styles.deleteIcon} onClick={() => deleteTodo(todo.id)} />
    </div>
  );
}

export default Todo;
