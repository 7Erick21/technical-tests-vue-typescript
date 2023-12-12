<script lang="ts" setup>
import { ROUTE_LOGIN } from "../../toolbox/constants/allRoutes";
</script>

<template>
  <div class="flex flex-col text-center justify-center h-screen gap-10">
    <div class="font-bold text-9xl text-blue-800">401</div>
    <div class="text-blue-800 text-xl font-bold">
      <router-link :to="ROUTE_LOGIN">Volver al inicio</router-link>
    </div>
  </div>
</template>
