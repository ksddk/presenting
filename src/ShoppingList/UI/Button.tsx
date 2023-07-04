import React from 'react';
import styles from './Button.module.css';
import { IButtonProps } from '../Todos/todo.types';

function Button(props: IButtonProps) {
  const { children, disabled = false } = props;
  return (
    <button {...props} className={styles.button} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
