import { api } from '../api';
import { ICompanies } from '../models/company';
import { IAPIResponse } from '../models/api';

export const getProvider = async () => {
  return await api.get<IAPIResponse<ICompanies>>("/getProviders");
}