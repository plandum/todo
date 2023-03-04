import { axiosInstance } from '../instance.ts';
import { ILoginRequest, ILoginResponse } from './types';
import Endpoints from "../endpoints.ts"
import { AxiosPromise } from 'axios';

export const login = (params: ILoginRequest): AxiosPromise<ILoginResponse> =>
  axiosInstance.post(Endpoints.AUTH.LOGIN, params)
