import styles from './Todo.module.css';
import React, {useState} from 'react';
import UserTodo from '../TodoForUser/UserTodo.tsx'
import axios from 'axios';

export const Todo = ({ UserName }) => {
  const [TodoData, setTodoData] = useState([])
  var username = UserName
  const UpdateTodo = async (e) => {
    e.preventDefault();
    const reg = await axios.post("/getTodo", { username: username })
    setTodoData(reg.data)
  }

  return (
    <div className={styles.container}>
      <header>
        <div className={styles.TopMenu}>
          <span>{username}</span>
          <button className={styles.Btn} onClick={UpdateTodo}>Получить задачи</button>
        </div>
      </header>
      <main>
        <div className={styles.MainDiv}>
          {TodoData.map((massive) => {return (<UserTodo title={massive[1]} description= {massive[2]} />) })}
        </div>
      </main>
    </div>
  );
};

export default Todo;