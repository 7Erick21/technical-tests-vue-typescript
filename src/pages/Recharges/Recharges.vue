<script setup lang="ts">
import Button from "../../components/Buttons/Button.vue";
import Tab from "../../components/Tab/Tab.vue";
import { ref, onMounted } from "vue";
import StartIcon from "../../assets/svg/star.svg";
import PhoneIcon from "../../assets/svg/phone.svg";
import HeartIcon from "../../assets/svg/heart.svg";
import Card from "../../components/Card/Card.vue";
import { ICompany } from "../../api/models/company";
import seacrhIcon from "../../assets/svg/search.svg";
import { useProvidersStore } from "../../toolbox/stores/providers";

const mocksButton = [
  { name: "Todas", image: HeartIcon },
  { name: "Favoritas", image: StartIcon },
  { name: "Telefonía", image: PhoneIcon },
];
const { useGetProviders } = useProvidersStore();

const filteredCompanies = ref<ICompany[]>([]);
const filterByName = (name: string) => {
  filteredCompanies.value =
    filteredCompanies.value.filter((company) =>
      company.company.toLowerCase().includes(name.toLowerCase())
    ) || [];
};
const searchTerm = ref("");

onMounted(async () => {
  const { companies } = await useGetProviders();
  filteredCompanies.value = companies;
});
</script>

<template>
  <div>
    <div>
      <Tab name="Recargas" />
      <div class="p-[15px]">
        <p class="text-[11px] font-[700]">Buscar Empresa</p>
        <div class="pb-[15px] relative">
          <input
            v-model="searchTerm"
            @input="filterByName(searchTerm)"
            class="flex relative p-[3px] font-[500] px-[15px] w-[100%] h-[60px] items-center gap-[5px] bg-gray-100"
            placeholder="ej. Culqui"
          />
          <img
            :src="seacrhIcon"
            class="w-[25px] h-[25px] absolute top-[18px] right-[20px]"
          />
        </div>

        <div class="flex flex-row justify-between mb-2">
          <Button
            v-for="data in mocksButton"
            :text="data.name"
            :key="data.name"
            :img="data.image"
          />
        </div>
        <div>
          <Card
            v-for="data in filteredCompanies"
            :name="data.company"
            :key="data._id"
            :logo="data.image"
          />
        </div>
      </div>
    </div>
  </div>
</template>
../../toolbox/stores/providers
