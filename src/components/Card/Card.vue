<script lang="ts" setup>
import { ref } from "vue";
import StartIcon from "../../assets/svg/star.svg";
import StartYellowIcon from "../../assets/svg/star_yellow.svg";

interface ICardProps {
  name: string;
  logo: string;
}

const favorite = ref<boolean>(false);

const handleFavorite = () => {
  favorite.value = !favorite.value;
};

const { logo, name } = defineProps<ICardProps>();
</script>

<template>
  <div
    class="flex flex-row items-center p-4 relative top-0 justify-between border-b-[2px]"
  >
    <div class="flex flex-row items-center gap-[10px]">
      <img :src="logo" class="w-[32px] h-[32px]" />
      <p class="mx-auto">{{ name }}</p>
    </div>
    <figure @click="handleFavorite" class="cursor-pointer">
      <img
        :src="favorite ? StartYellowIcon : StartIcon"
        class="w-[32px] h-[32px]"
      />
    </figure>
  </div>
</template>
