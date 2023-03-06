import React from 'react';
import styles from './UserTodo.module.css';

const UserTodo = ({username, usernames, setUsername}) => {
const removeArrEl = (arr, valueToDelete) => {
    const newArray = arr.filter((number) => number !== valueToDelete);
    return(newArray)
}
function deleteUser(username) {
    let copy = Object.assign([], usernames);
    const newArray = removeArrEl(copy, username)
    setUsername(newArray); 
  }

  return (
    <div className={styles.Block}>
      <div>
        <span className={styles.TodoLogin}>{username}</span>
        <button className={styles.delBtn} onClick={() => deleteUser(username)}>X</button>
        <button className={styles.addBtn} onClick={() =>console.log(username)}>+</button>
      </div>
      
      <div className={styles.TodoList}>
        <button className={styles.todoItem}>Задача</button>
        <button className={styles.todoItem}>Задача</button>
      </div>
    </div>
  );
};

export default UserTodo;
