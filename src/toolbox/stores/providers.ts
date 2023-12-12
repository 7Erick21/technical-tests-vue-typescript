import { defineStore } from "pinia";

import { ICompanies } from "../../api/models/company";
import { getProvider } from "../../api/repository/providerRepository";

export const useProvidersStore = defineStore("providers", () => {
  const useGetProviders = async (): Promise<ICompanies> => {
    try {
      const { data } = await getProvider();
      if (data.responseMessage === "success") {
        return {
          companies: data.data.companies,
        };
      }
    } catch (error) {
      return {
        companies: [],
      };
    }
    return {
      companies: [],
    };
  };

  return {
    useGetProviders,
  };
});
