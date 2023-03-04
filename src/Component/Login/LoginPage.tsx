import styles from './LoginPage.module.css';
import { useState, FormEvent } from 'react';
import React from 'react';
import { useAppDispatch } from '../../store/index.ts';
import {loginUser} from '../../store/auth/actionCreators.ts'


export const LoginPage = ({ onChange }) => {
  const dispatch = useAppDispatch();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const HandleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    dispatch(loginUser({ username, password }));
  };

  const handleNameChange = (e) => {
    setUsername(e.target.value)
    onChange(e.target.value)
  }


  return (
    <form onSubmit={HandleSubmit}>
      <div className={styles.CentringDiv}>
        <div className={styles.FormGroup}>
          <label className={styles.FormLabel} >
            UserName
          </label>
          <input
            placeholder="username"
            name="username"
            id="login"
            className={styles.FormControl}
            value={username}
            onChange={handleNameChange}
            
          />
        </div>
        <div className={styles.FormGroup}>
          <label className={styles.FormLabel} >
            Password
          </label>
          <input
            placeholder="password"
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
            Войти
          </button>
        </div>
      </div>
    </form>
  );
};

export default LoginPage;