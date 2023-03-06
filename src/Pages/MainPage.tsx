import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import {IRootState} from "../store/index.ts"
import { LoginPage } from '../Component/Login/LoginPage.tsx'
import { Todo } from "../Component/Todo/Todo.tsx"
import {AdminPage} from "../Component/AdminPanel/AdminPage.tsx"
import axios from 'axios';

export const MainPage = () => {
  const isLoggedIn = useSelector(
    (state: IRootState) => !!state.auth.authData.token
  )

    function isAdmin(role) {
      if (Role === "ADMIN") { return true }
      else {return false}
    }
  
  const [UserName, setUserName] = useState('')
  const [Role, setRole] = useState('')
  
  const handleNameChange = async (username) => {
    setUserName(username)
    const role = await axios.post("/getRoles", { username: username })  
    setRole(role.data[0])
  }

  //<LoginPage onChange={handleNameChange}/>
  return (
    <div>
      {isLoggedIn ? isAdmin(Role) ? <AdminPage />:<Todo UserName={UserName} /> : <AdminPage/>}
    </div>
  );
};

export default MainPage;