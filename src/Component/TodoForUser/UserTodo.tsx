import React from 'react';
import styles from './UserTodo.module.css';

const UserTodo = ({title, description,deadline }) => {

  return (
    <div className={styles.Block}>
      <span className={styles.TodoDeadline}>{ deadline}</span>
      <span className={styles.TodoTitle}>{ title }</span>
      <div className={styles.TodoList}>
        <span className={styles.TodoDescription}>{description}</span>
      </div>
    </div>
  );
};

export default UserTodo;
