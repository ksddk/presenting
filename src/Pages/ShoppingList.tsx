import { useState } from 'react';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoForm from '../ShoppingList/Todos/TodoForm';
import TodosActions from '../ShoppingList/Todos/TodosActions';
import TodoList from '../ShoppingList/Todos/TodoList';
import { ITodo } from '../ShoppingList/Todos/todo.types';

function ShoppingListing() {
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
    <div style={{ textAlign: 'center' }}>
      <div>
        <h1>List to the supermarket</h1>
        <TodoForm addTodo={addTodoHandler} />
        {!!todos.length && (
          <TodosActions
            completedTodosExist={!!completedTodosCounter}
            resetTodos={resetTodoHandler}
            deleteCompletedTodos={deleteCompletedTodosHandler}
          />
        )}
        <TodoList todos={todos} deleteTodo={deleteTodoHandler} toggleTodo={toggleTodoHandler} />
        {completedTodosCounter > 0 && (
          <h2>
            {`You bought ${completedTodosCounter} ${completedTodosCounter > 1 ? 'items' : 'item'}!`}
          </h2>
        )}
      </div>
    </div>
  );
}

export default ShoppingListing;
