<template>
  <section class="bg-transparent relative mt-32 lg:mt-64">
    <div class="px-6 mx-auto max-w-7xl z-10 relative">
      <div class="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
        <h1
          class="mb-8 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight"
        >
          <span>РАЗРАБОТКА</span>
          <span
            class="block w-full py-2 font-extrabold text-transparent bg-clip-text leading-12 bg-gradient-to-r from-emerald-400 to-sky-500 lg:inline"
            >WEB APPS ПРИЛОЖЕНИЙ</span
          >
          <span>В TELEGRAM</span>
        </h1>
        <p class="px-0 mb-8 text-lg text-gray-600 md:text-xl lg:px-24">
          Создание веб-приложений в Telegram с уникальным дизайном под ключ
        </p>
        <div class="mb-4 space-x-0 space-y-2 md:space-x-2 md:mb-8">
          <a
            class="inline-flex items-center justify-center gap-2 w-full px-6 py-3 mb-2 text-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 text-white bg-blue-700 rounded-2xl sm:w-auto sm:mb-0 hover:scale-95 transition cursor-pointer"
            @click="visibleConsult = true"
          >
            Оставить заявку
            <i class="pi pi-arrow-right"></i>
          </a>
          <a
            class="inline-flex items-center justify-center gap-2 w-full px-6 py-3 mb-2 text-lg text-gray-700 hover:bg-amber-400 focus:ring-4 focus:outline-none focus:ring-amber-300 bg-slate-100 rounded-2xl sm:w-auto sm:mb-0 hover:scale-95 transition cursor-pointer"
            @click="visibleCalculator = true"
          >
            Калькулятор
            <i class="pi pi-calculator"></i>
          </a>
        </div>
      </div>
      <div class="relative w-full mx-auto mt-4 lg:mt-4 text-center">
        <img src="../assets/mockups_main.png" class="w-full" alt="" />
      </div>
    </div>
  </section>

  <Dialog
    v-model:visible="visibleCalculator"
    modal
    header="СТОИМОСТЬ РАЗРАБОТКИ"
    class="w-full lg:w-1/3 m-2 lg:m-0 p-0"
  >
    <Calculator />
  </Dialog>

  <Dialog
    v-model:visible="visibleConsult"
    modal
    header="ОСТАВЬТЕ ЗАЯВКУ"
    class="w-full lg:w-1/3 m-2 lg:m-0 p-0"
  >
    <Consult :visibleConsult="visibleConsult" />
  </Dialog>
</template>

<script setup>
import Dialog from "primevue/dialog";
import Calculator from "./Calculator.vue";
import Consult from "./Consult.vue";

import { ref } from "vue";

const visibleCalculator = ref(false);
const visibleConsult = ref(false);

function handleCloseDialog() {
  visibleConsult.value = false;
}
</script>

<style scoped></style>
