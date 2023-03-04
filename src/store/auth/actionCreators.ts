import { Dispatch } from "@reduxjs/toolkit";
import api from "../../api/index.ts"
import { ILoginRequest } from "../../api/auth/types"
import { loginStart, loginSucces, loginFailture } from './authReducer.ts';

export const loginUser =
  (data: ILoginRequest) =>
    async (dispatch: Dispatch): Promise<void> => {
  try {
    dispatch(loginStart())

    const res = await api.auth.login(data)

    dispatch(loginSucces(res.data.token))
  } catch (e: any) { 
    console.error(e)

    dispatch(loginFailture(e.message))
  }
    }
