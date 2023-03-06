import React from 'react'
import styles from './user.module.css'
import axios from 'axios';

export const User = ({ username, usernames, setUsername }) => {
  function addUser(username) {
    let copy = Object.assign([], usernames);
    copy.push(username);
    setUsername(copy); 
  }
  const deleteUser = async (username) => {
    const reg = await axios.post("/deleteUser", { username: username })
    alert(reg.data.message + " " + username)
  }

  return (
    <div className={styles.btnDiv}>
      <button className={styles.btn} onClick={()=> addUser(username)}>{username}</button>
      <button className={styles.btnDel} onClick={()=> deleteUser(username)}>X</button>
      </div>
  )
}

export default User;