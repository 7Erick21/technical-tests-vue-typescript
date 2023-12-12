<script lang="ts" setup>
import { ROUTE_RECHARGES_PAYMENTS } from "../../toolbox/constants/allRoutes";
import BackIcon from "../../assets/svg/back.svg";

interface ITabProps {
  name: string;
}
const { name } = defineProps<ITabProps>();
</script>

<template>
  <div
    class="flex flex-row items-center p-4 bg-gray-191919 rounded-b-2xl relative top-0 bg-gray-800"
  >
    <router-link :to="ROUTE_RECHARGES_PAYMENTS">
      <img :src="BackIcon" class="w-6 h-6" />
    </router-link>
    <p class="mx-auto text-white">{{ name }}</p>
  </div>
</template>
