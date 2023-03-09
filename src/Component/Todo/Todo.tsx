import styles from './Todo.module.css';
import React, {useState} from 'react';
import UserTodo from '../TodoForUser/UserTodo.tsx'
import axios from 'axios';

export const Todo = ({ UserName }) => {
  const [TodoData, setTodoData] = useState([])
  var username = UserName
  const UpdateTodo = async () => {
    const reg = await axios.post("/getTodo", { username: username })
    setTodoData(reg.data)
  }
  setTimeout(UpdateTodo, 1000);
  return (
    <div className={styles.container}>
      <header>
        <div className={styles.TopMenu}>
          <span>{username}</span>
        </div>
      </header>
      <main>
        <div className={styles.MainDiv}>
          {TodoData.map((massive) => {return (<UserTodo deadline={massive[0]} title={massive[1]} description= {massive[2]} />) })}
        </div>
      </main>
    </div>
  );
};

export default Todo;