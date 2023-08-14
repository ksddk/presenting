import React from 'react';
import Reset from './Assets/Reset.svg';
import Delete from './Assets/Delete.svg';
import styles from './TodosActions.module.css';
import { ITodosActions } from './todo.types';

function TodosActions({ resetTodos, deleteCompletedTodos, completedTodosExist }: ITodosActions) {
  return (
    <div className={styles.todosActionsContainer}>
      <button className={styles.Reset} title="Reset items" onClick={resetTodos}>
        <img src={Reset} className={styles.ResetImg} />
      </button>
      <button
        className={styles.Delete}
        title="Delete marked items"
        onClick={deleteCompletedTodos}
        disabled={!completedTodosExist}>
        <img src={Delete} className={styles.DeleteImg} />
      </button>
    </div>
  );
}

export default TodosActions;
