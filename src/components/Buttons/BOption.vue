<script lang="ts" setup>
import { ROUTE_RECHARGES } from "../../toolbox/constants/allRoutes";

interface IBOptionProps {
  text: string;
  logo: string;
}

const { logo, text } = defineProps<IBOptionProps>();
</script>

<template>
  <router-link :to="ROUTE_RECHARGES">
    <button
      class="flex text-[17px] p-[5px] px-[12px] rounded-[5px] bg-gray-100 items-center gap-[20px] w-[100%] h-16 relative"
    >
      <figure
        class="flex flex-row content-center items-center justify-center bg-orange-500 h-8 w-[11%] raduis rounded-[5px] max-w-[32px]"
      >
        <img :src="logo" class="w-5 h-5" />
      </figure>
      <p class="w-[89%] text-start font-semibold">{{ text }}</p>
    </button>
  </router-link>
</template>
