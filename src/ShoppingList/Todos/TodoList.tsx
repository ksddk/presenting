import React from 'react';
import Todo from './Todo';
import styles from './TodoList.module.css';
import { ITodoListProps, ITodo } from './todo.types';

function TodoList({ todos, deleteTodo, toggleTodo }: ITodoListProps) {
  return (
    <div className={styles.todoListContainer}>
      {!todos.length && <h2>Item&apos;s list is empty</h2>}
      {todos.map((todo: ITodo) => (
        <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
      ))}
    </div>
  );
}

export default TodoList;
