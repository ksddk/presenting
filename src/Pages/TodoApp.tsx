import { useState } from 'react';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoForm from '../TodoApp/Todos/TodoForm';
import TodosActions from '../TodoApp/Todos/TodosActions';
import TodoList from '../TodoApp/Todos/TodoList';
import { ITodo } from '../TodoApp/Todos/todo.types';
import styles from './TodoApp.module.css';

export default function TodoApp() {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addTodoHandler = (text: string) => {
    const newTodo: ITodo = {
      text,
      isCompleted: false,
      id: uuidv4()
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodoHandler = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodoHandler = (id: string) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : { ...todo };
      })
    );
  };

  const resetTodoHandler = () => {
    setTodos([]);
  };

  const deleteCompletedTodosHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  };

  const completedTodosCounter = todos.filter((todo) => todo.isCompleted).length;

  return (
    <div className={styles.MainContainer}>
      <div className={styles.MainContainer2}>
        <div className={styles.TitleContainer}>
          <div className={styles.Title1st}>TODO</div>
          <div className={styles.Title2nd}>APP</div>
        </div>
        <TodoForm addTodo={addTodoHandler} />
        <TodoList todos={todos} deleteTodo={deleteTodoHandler} toggleTodo={toggleTodoHandler} />
        {completedTodosCounter > 0 && (
          <p className={styles.TodoCounterText}>
            {`You completed ${completedTodosCounter} ${
              completedTodosCounter > 1 ? 'todos' : 'todo'
            }!`}
          </p>
        )}
        {!!todos.length && (
          <TodosActions
            completedTodosExist={!!completedTodosCounter}
            resetTodos={resetTodoHandler}
            deleteCompletedTodos={deleteCompletedTodosHandler}
          />
        )}
      </div>
    </div>
  );
}