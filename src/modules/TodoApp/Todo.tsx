import React from 'react';
import styles from './Todo.module.css';
import { ITodoProps } from './todo.types';
import { TrashBin, Circle, Tick } from './Assets';

export const Todo = ({ todo, deleteTodo, toggleTodo }: ITodoProps) => {
  return (
    <div className={`${styles.todo} ${todo.isCompleted ? styles.completedTodo : ''}`}>
      <div style={{ position: 'relative' }} onClick={() => toggleTodo(todo.id)}>
        <img src={Circle} className={styles.checkIcon} style={{ position: 'relative' }} />
        {todo.isCompleted && <img src={Tick} className={styles.tickIcon} />}
      </div>
      <div className={styles.todoText}>{todo.text}</div>
      <img src={TrashBin} className={styles.deleteIcon} onClick={() => deleteTodo(todo.id)} />
    </div>
  );
};
