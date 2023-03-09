import React from 'react';
import styles from './modal.module.css';

const Modal = ({ active, setActive, deadline, title, description }) => {
  return (
    <div className={active ? styles.modalActive : styles.modal} onClick={() => setActive(false)}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.deadlinePos}> 
          <label className={styles.deadline}>{deadline}</label>
        </div>
        <div className={styles.titlePos}>
          <label className={styles.title}>{title}</label>
        </div>
        <div className={styles.descriptionPos}>
          <p className={styles.description}>{description}</p>
        </div>
        
        
      </div>
      </div>
    );
};

export default Modal;
