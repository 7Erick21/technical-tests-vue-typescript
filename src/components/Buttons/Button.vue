<script lang="ts" setup>
interface IButtonProps {
  text: string;
  img: string;
}

const { img, text } = defineProps<IButtonProps>();
</script>

<template>
  <button
    class="flex text-sm border-solid border-[1px] p-1 px-[12px] rounded-2xl border-gray-300 hover:border-orange-500 items-center gap-[5px]"
  >
    <img :src="img" class="w-4 h-4" />
    {{ text }}
  </button>
</template>
