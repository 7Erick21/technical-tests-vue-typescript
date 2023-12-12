<script setup lang="ts">
import { ref } from "vue";

import { useRouter } from "vue-router";
import { getProvider } from "../../api/repository/providerRepository";
import { ROUTE_RECHARGES_PAYMENTS } from "../../toolbox/constants/allRoutes";
import { useAuthStore } from "../../toolbox/stores/auth";

const auth = useAuthStore();
const token = ref(auth.token);
const router = useRouter();

const handleAccess = async () => {
  auth.setToken(token.value);
  try {
    const { status } = await getProvider();
    if (status === 200) {
      router.push(ROUTE_RECHARGES_PAYMENTS);
    }
  } catch (error) {
    console.error(error);
  }
};
</script>

<template>
  <div class="bg-slate-100 flex justify-center items-center h-screen">
    <div
      class="bg-white rounded-3xl flex flex-col w-96 h-96 justify-center items-center gap-10 p-8 shadow-md"
    >
      <div class="flex flex-col gap-4 justify-center">
        <label class="text-lg text-center">Ingrese el Token de Acceso</label>
        <input
          v-model="token"
          class="flex py-2 px-4 bg-white shadow-md rounded-2xl"
          placeholder="Ingresar Token"
        />
      </div>
      <button
        @click="handleAccess"
        class="bg-slate-200 p-3 px-9 rounded-xl hover:opacity-50 transition-opacity"
      >
        Acceder
      </button>
    </div>
  </div>
</template>
../../toolbox/stores/auth
