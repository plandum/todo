import React from 'react';
import styles from './modal.module.css';
import { useState, FormEvent } from 'react';
import axios from 'axios';

const Modal = ({ active, setActive, username }) => {

  const [deadline, setDeadline] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const HandleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await axios.post('/setTodo', {
      username:  username ,
      deadline:deadline,
      title:title,
      description:description
    })
    alert("Задание добавлено")
    setDeadline('')
    setTitle('')
    setDescription('')
  }
  return (
    <form onSubmit={HandleSubmit}>
    <div className={active ? styles.modalActive : styles.modal} onClick={() => setActive(false)}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.FormGroup}>
          <label className={styles.FormLabel}>Время выполнения</label>
          <input
            placeholder="Время выполнения"
            name="deadline"
            id="deadline"
            maxLength="20"
            type="text"
            className={styles.FormControl}
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          />
        </div>
        <div className={styles.FormGroup}>
          <label className={styles.FormLabel}>Название</label>
            <input
            placeholder='Название'
            name="title"
            id="title"
            maxLength="20"
            type="text"
            className={styles.FormControl}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          </div>
          <div className={styles.FormGroup}>
          <label className={styles.FormLabel}>Описание</label>
          <textarea 
            placeholder="Описание"
            name="description"
            id="description"
            maxLength="500"
            type="text"
            className={styles.descriptionInp}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <button type="submit" className={styles.LogButton}>
            Добавить
          </button>
        </div>  
          
      </div>
      </form>
    );
};

export default Modal;
