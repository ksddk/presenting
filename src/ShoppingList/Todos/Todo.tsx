import React from 'react';
import styles from './Todo.module.css';
import { ITodo, ITodoProps } from './todo.types';
import TrashBin from './Assets/TrashBin.svg';
import Circle from './Assets/Circle.svg';
import Tick from './Assets/Tick.svg';

function Todo({ todo, deleteTodo, toggleTodo }: ITodoProps) {
  return (
    <div className={`${styles.todo} ${todo.isCompleted ? styles.completedTodo : ''}`}>
      <div style={{ position: 'relative' }} onClick={() => toggleTodo(todo.id)}>
        <img src={Circle} className={styles.checkIcon} style={{ position: 'relative' }} />
        {todo.isCompleted && (
          <img src={Tick} style={{ position: 'absolute', top: '4px', left: '10px' }} />
        )}
      </div>
      <div className={styles.todoText}>{todo.text}</div>
      <img src={TrashBin} className={styles.deleteIcon} onClick={() => deleteTodo(todo.id)} />
    </div>
  );
}

export default Todo;
