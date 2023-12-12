<script lang="ts" setup>
import Button from "../../components/Buttons/Button.vue";
import Tab from "../../components/Tab/Tab.vue";
import HeartIcon from "../../assets/svg/heart.svg";
import BOption from "../../components/Buttons/BOption.vue";
import SmartphoneIcon from "../../assets/svg/smartphone.svg";
import LightbulbIcon from "../../assets/svg/lightbulb.svg";
import ScheduleIcon from "../../assets/svg/schedule.svg";
import { onMounted, ref } from "vue";
import { useBalanceStore } from "../../toolbox/stores/balance";
import ReloadIcon from "../../assets/svg/reload.svg";
import { ROUTE_RECHARGES } from "../../toolbox/constants/allRoutes";
import AlertIcon from "../../assets/svg/alert.svg";

const mocksCard = [
  { name: "Recargas", image: SmartphoneIcon, url: ROUTE_RECHARGES },
  { name: "Pago de servicios", image: LightbulbIcon, url: "" },
  {
    name: "Historial de ganancias y operaciones",
    image: ScheduleIcon,
    url: "",
  },
];
const { useGetBalance } = useBalanceStore();
const loading = ref<boolean>(true);
const balance = ref<string>("");

onMounted(async () => {
  const { balanceCommerce } = await useGetBalance();
  balance.value = balanceCommerce;
  loading.value = false;
});

const title = "Recargas y pagos";
</script>

<template>
  <div>
    <Tab :name="title" />
    <div class="pt-[10px] px-[18px] relative">
      <div class="p-3 gap-3 flex flex-col">
        <div class="flex flex-row items-center gap-3">
          <p>Saldo virtual</p>
          <img :src="AlertIcon" class="w-5 h-5" />
        </div>
        <div>
          <div class="flex flex-row items-center gap-3 mb-1">
            <p v-if="loading">Cargando...</p>
            <p v-else class="text-3xl font-bold">
              {{ balance }}
            </p>
            <img :src="ReloadIcon" class="w-5 h-5" />
          </div>
          <Button text="¿Como cargar mi salgo virtual?" :img="HeartIcon" />
        </div>
        <p class="text-sm">Codigo para cargar tu saldo:</p>
      </div>
      <div class="bg-gray-200 w-[100%] h-[1px] mb-5 mt-3"></div>

      <div class="flex flex-col gap-5">
        <BOption
          v-for="data in mocksCard"
          :text="data.name"
          :key="data.name"
          :logo="data.image"
          :url="data.url"
        />
      </div>
    </div>
  </div>
</template>
