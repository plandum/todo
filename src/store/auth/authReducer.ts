import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface AuthState{
  authData: {
    token: string | null,
    isLoading: boolean,
    error : string | null,
  }
  profileData: {
    profile: string | null,
    isLoading: boolean,
    error : string | null,
  }
}

const initialState: AuthState = {
  authData: {
    token: null,
    isLoading: false,
    error: null,
  },
  profileData: {
    profile: null,
    isLoading: false,
    error: null,
  }
}

export const authReducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart: (state): AuthState => ({
      ...state,
      authData: {
        ...state.authData,
        isLoading: true,
      }
    }),
    loginSucces: (state, action: PayloadAction<string>): AuthState => ({
      ...state,
      authData: {
        ...state.authData,
        token: action.payload,
        isLoading: false,
        error: null,
      }
    }),
    loginFailture: (state, action: PayloadAction<string>): AuthState => ({
      ...state,
      authData: {
        ...state.authData,
        isLoading: false,
        error: action.payload,
      }
    }),
    loadProfileStart: (state): AuthState => ({
      ...state,
      profileData: {
        ...state.profileData,
        isLoading: true,
      }
    }),
    loadProfileSucces: (state, action: PayloadAction<string>): AuthState => ({
      ...state,
      profileData: {
        ...state.profileData,
        profile: action.payload,
        isLoading: false,
        error: null,
      }
    }),
    loadProfileFailture: (state, action: PayloadAction<string>): AuthState => ({
      ...state,
      profileData: {
        ...state.profileData,
        isLoading: false,
        error: action.payload,
      }
    }),
    logoutSuccess: (): AuthState => initialState,
  },
})

export const { loadProfileStart, loadProfileSucces, loadProfileFailture, loginStart, loginSucces, loginFailture, logoutSuccess } = authReducer.actions
export default authReducer.reducer