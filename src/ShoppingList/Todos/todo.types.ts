export interface ITodo {
  text: string;
  isCompleted: boolean;
  id: string;
}

export interface ITodoProps {
  todo: ITodo;
  deleteTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
}

export interface ITodoListProps {
  todos: ITodo[];
  deleteTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
}

export interface ITodosActions {
  resetTodos: () => void;
  deleteCompletedTodos:() => void;
  completedTodosExist: boolean;
}

export interface IAddTodo {
  addTodo: (text: string) => void;
} 

export interface IButtonProps {
  children?: React.ReactNode;
  disabled?: boolean;
  type?: 'submit';
  title?: string;
  onClick?: () => void;
}

export type OnSubmit = (event: React.FormEvent<HTMLFormElement>) => void;