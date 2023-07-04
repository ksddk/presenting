import React from 'react';
import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri';
import Button from '../UI/Button';
import styles from './TodosActions.module.css';
import { ITodosActions } from './todo.types';

function TodosActions({ resetTodos, deleteCompletedTodos, completedTodosExist }: ITodosActions) {
  return (
    <div className={styles.todosActionsContainer}>
      <Button title="Reset items" onClick={resetTodos}>
        <RiRefreshLine />
      </Button>
      <Button
        title="Delete marked items"
        onClick={deleteCompletedTodos}
        disabled={!completedTodosExist}>
        <RiDeleteBin2Line />
      </Button>
    </div>
  );
}

export default TodosActions;
