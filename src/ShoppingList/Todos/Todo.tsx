import React from 'react';
import { FaUtensils, FaCheck, FaRegTrashAlt } from 'react-icons/fa';
import styles from './Todo.module.css';
import { ITodo, ITodoProps } from './todo.types';

function Todo({ todo, deleteTodo, toggleTodo }: ITodoProps) {
  return (
    <div className={`${styles.todo} ${todo.isCompleted ? styles.completedTodo : ''}`}>
      <FaUtensils className={styles.todoIcon} />
      <div className={styles.todoText}>{todo.text}</div>
      <FaRegTrashAlt className={styles.deleteIcon} onClick={() => deleteTodo(todo.id)} />
      <FaCheck className={styles.checkIcon} onClick={() => toggleTodo(todo.id)} />
    </div>
  );
}

export default Todo;
