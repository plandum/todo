import React, {useState} from 'react';
import styles from './UserTodo.module.css';

import Modal from './addTodo/Modal.tsx'
import TodoItem  from './TodoItem/TodoItem.tsx';

import axios from 'axios';

const UserTodo = ({ username, usernames, setUsername }) => {
  const [modalActive, setModalActive] = useState(false)

  const removeArrEl = (arr, valueToDelete) => {
      const newArray = arr.filter((number) => number !== valueToDelete);
      return(newArray)
  }
  function deleteUser(username) {
      let copy = Object.assign([], usernames);
      const newArray = removeArrEl(copy, username)
      setUsername(newArray); 
  }
  const deleteTodo = async (e) => {
    e.preventDefault();
    await axios.post('/deleteTodo', {username:  username})
    alert("Задачи удалены")
  }
  const [TodoData, setTodoData] = useState([])
  const UpdateTodo = async () => {
    const reg = await axios.post("/getTodo", { username: username })
    setTodoData(reg.data)
  }
setTimeout(UpdateTodo, 1000);
  return (
    <div className={styles.Block}>
      <div>
        <span className={styles.TodoLogin}>{username}</span>
        <button className={styles.delBtn} onClick={() => deleteUser(username)}>x</button>
        <button className={styles.addBtn} onClick={() => setModalActive(true)}>+</button>
        <button className={styles.delTodoBtn} onClick={deleteTodo}>X</button>
      </div>
      
      <div className={styles.TodoList}>
         {TodoData.map((massive) => {return (<TodoItem deadline={massive[0]} title={massive[1]} description= {massive[2]} />) })}
      </div>
      <Modal active={modalActive} setActive={setModalActive} username={username} />
    </div>
  );
};

export default UserTodo;
