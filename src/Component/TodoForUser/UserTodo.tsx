import React from 'react';
import styles from './UserTodo.module.css';

const UserTodo = ({title, description, }) => {

  return (
    <div className={styles.Block}>
      <span className={styles.TodoLogin}>{ title }</span>
      <div className={styles.TodoList}>
        <label>{ description }</label>
      </div>
    </div>
  );
};

export default UserTodo;
