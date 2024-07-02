<template>
  <section class="bg-transparent relative mt-4 lg:mt-12">
    <div class="px-6 mx-auto max-w-7xl z-10 relative">
      <div class="w-full mx-auto md:w-11/12 xl:w-9/12 text-center">
        <h2 class="text-3xl font-extrabold mb-6 text-gray-700">
          СТОИМОСТЬ РАЗРАБОТКИ
          <span
            class="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-l from-sky-400 via-violet-500 to-pink-500 lg:inline"
            >WEB APPS</span
          >
        </h2>
        <p class="px-0 mb-8 text-lg text-gray-600 md:text-xl lg:px-24">
          Создание веб-приложений в Telegram с уникальным дизайном под ключ
        </p>
        <div class="mb-4 space-x-0 space-y-2 md:space-x-2 md:mb-8">
          <a
            class="relative inline-flex items-center justify-center gap-2 w-full px-6 py-3 mb-2 text-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 text-white bg-blue-700 rounded-2xl sm:w-auto sm:mb-0 hover:scale-95 transition"
            @click="visibleConsult = true"
          >
            От 50 000 р. заказать →
          </a>
          <a
            class="inline-flex items-center justify-center gap-2 w-full px-6 py-3 mb-2 text-lg text-gray-700 hover:bg-amber-400 focus:ring-4 focus:outline-none focus:ring-amber-300 bg-slate-100 rounded-2xl sm:w-auto sm:mb-0 hover:scale-95 transition cursor-pointer"
            @click="visibleCalculator = true"
          >
            Калькулятор стоимости
            <i class="pi pi-calculator"></i>
          </a>
          <a
            class="inline-flex items-center justify-center gap-2 w-full px-6 py-3 mb-2 text-lg text-gray-700 hover:bg-amber-400 focus:ring-4 focus:outline-none focus:ring-amber-300 bg-slate-100 rounded-2xl sm:w-auto sm:mb-0 hover:scale-95 transition cursor-pointer"
            href="../assets/TGecom_Brief.xlsx"
            download="TGecom_Brief.xlsx"
            @click=""
          >
            Скачать бриф
            <i class="pi pi-download"></i>
          </a>
        </div>
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
import Consult from "./Consult.vue";
import Calculator from "./Calculator.vue";

import { ref } from "vue";
const visibleCalculator = ref(false);
const visibleConsult = ref(false);

function handleCloseDialog() {
  visibleConsult.value = false;
}
</script>

<style scoped></style>
