import React, { useState } from 'react'
import styles from './AdminPage.module.css'
import Modal from '../RegistrationPopup/Modal.tsx'
import UserTodo from '../UserTodo/UserTodo.tsx'
import User from './users/user.tsx'
import axios from 'axios';

export const AdminPage = () => {
  const [modalActive, setModalActive] = useState(false)
  const [usernames, setUsernames] = useState([])
  const [username, setUsername] = useState([])
  
  const GetUsers = async () => {
    const reg = await axios.get("/users")
    setUsername(reg.data)    
  }
  setTimeout(GetUsers, 1000);


    return (
      <div className={styles.AllBackground}>
        
        <div className={styles.FirstDiv}>
            <button className={styles.AddUser} onClick={() => setModalActive(true)}>Добавить пользователя</button>
        </div>
        <div className={styles.SecondDiv}>
            <div>
                <span>Список пользователей:</span>
          </div>
          <div>
            {username.map((massive) => {return (<User username={massive.username} usernames={usernames} setUsername={setUsernames} />) })}
            
          </div>
        </div>
        <div className={styles.ThirdDiv}>
          {usernames.map((username) => {return (<UserTodo username={username} usernames={usernames} setUsername={setUsernames} />) })}
        </div>
        <Modal active={modalActive} setActive={setModalActive} />
    </div>
    
    
  )
}

export default AdminPage;