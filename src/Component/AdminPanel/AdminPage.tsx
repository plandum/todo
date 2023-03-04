import React, { useState } from 'react'
import styles from './AdminPage.module.css'
import Modal from '../RegistrationPopup/Modal.tsx'
import UserTodo from '../UserTodo/UserTodo.tsx'

export const AdminPage = () => {
  const [modalActive, setModalActive] = useState(false)

    return (
      <div className={styles.AllBackground}>
        
        <div className={styles.FirstDiv}>
            <button className={styles.AddUser} onClick={() => setModalActive(true)}>Добавить пользователя</button>
            <button className={styles.ExitButton}>Выход</button>
        </div>
        <div className={styles.SecondDiv}><div>
                <span>Поиск:</span>
                <input></input>
                <span>Список пользователей:</span>
            </div>
        </div>
        <div className={styles.ThirdDiv}>
          <UserTodo />  
        </div>
        <Modal active={modalActive} setActive={setModalActive} />
    </div>
    
    
  )
}

export default AdminPage;