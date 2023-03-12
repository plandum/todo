import React from 'react';
import styles from './modal.module.css';
import { useState, FormEvent } from 'react';
import axios from 'axios';

const Modal = ({ active, setActive }) => {

  const [UserName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const HandleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const reg = await axios.post("/registration", { username: UserName, password: password })
    alert(reg.data.message)
  }
  return (
    <form onSubmit={HandleSubmit}>
    <div className={active ? styles.modalActive : styles.modal} onClick={() => setActive(false)}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.FormGroup}>
          <label className={styles.FormLabel}>Username</label>
          <input
            placeholder="username"
            name="username"
            id="username"
            className={styles.FormControl}
            value={UserName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className={styles.FormGroup}>
          <label className={styles.FormLabel}>Password</label>
          <input
            placeholder="Не менее 5 символов"
            name="password"
            id="password"
            className={styles.FormControl}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={styles.CenterButton}>
          <button type="submit" className={styles.LogButton}>
            Зарегистрировать
          </button>
        </div>
      </div>
      </div>
      </form>
    );
};

export default Modal;
