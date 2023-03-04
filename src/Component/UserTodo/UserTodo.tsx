import React from 'react';
import styles from './UserTodo.module.css';

const UserTodo = () => {


  return (
    <div className={styles.Block}>
      <span className={styles.TodoLogin}>User login</span>
      <div className={styles.TodoList}>
        <button className={styles.todoItem}>Задача</button>
        <button className={styles.todoItem}>Задача</button>
      </div>
    </div>
  );
};

export default UserTodo;
