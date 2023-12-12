import { api } from '../api';
import { IAPIResponse } from '../models/api';
import { IBalance } from '../models/balance';

export const getBalance = async () => {
  return await api.get<IAPIResponse<IBalance>>("/getActualBalance")
}