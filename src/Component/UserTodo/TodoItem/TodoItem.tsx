import React, {useState} from 'react'
import styles from './TodoItem.module.css';

import Modal from './Modal/Modal.tsx'

export const TodoItem = ({ deadline, title, description }) => {
  const [modalActive, setModalActive] = useState(false)

  return (
    <div className={styles.centring}>
      <button className={styles.todoItem} onClick={() => setModalActive(true)}>{title}</button>
      <Modal active={modalActive} setActive={setModalActive} deadline={deadline} title={title} description={description} />
    </div>
    
    
  )
}

export default TodoItem