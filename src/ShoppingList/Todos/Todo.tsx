import React from 'react';
import styles from './Todo.module.css';
import { ITodo, ITodoProps } from './todo.types';
import TrashBin from './Assets/TrashBin.svg';
import Circle from './Assets/Circle.svg';
import Tick from './Assets/Tick.svg';

function Todo({ todo, deleteTodo, toggleTodo }: ITodoProps) {
  return (
    <div className={`${styles.todo} ${todo.isCompleted ? styles.completedTodo : ''}`}>
      <img src={Circle} className={styles.checkIcon} onClick={() => toggleTodo(todo.id)} />
      {todo.isCompleted && <img src={Tick} />}
      <div className={styles.todoText}>{todo.text}</div>
      <img src={TrashBin} className={styles.deleteIcon} onClick={() => deleteTodo(todo.id)} />
    </div>
  );
}

export default Todo;
