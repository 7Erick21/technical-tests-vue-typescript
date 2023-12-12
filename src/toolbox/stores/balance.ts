import { defineStore } from "pinia";

import { IBalance } from "../../api/models/balance";
import { getBalance } from "../../api/repository/balanceRepository";

export const useBalanceStore = defineStore("balance", () => {
  const useGetBalance = async (): Promise<IBalance> => {
    try {
      const { data } = await getBalance();
      if (data.responseMessage === "success") {
        return {
          balanceCommerce: data.data.balanceCommerce,
        };
      }
    } catch (error) {
      return {
        balanceCommerce: "",
      };
    }
    return {
      balanceCommerce: "",
    };
  };

  return {
    useGetBalance,
  };
});
