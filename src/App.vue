<script setup>
import { ref } from "vue";
const visible = ref(false);

import { useToast } from "primevue/usetoast";
const toast = useToast();

const showSuccess = () => {
  toast.add({
    severity: "success",
    summary: "Спасибо",
    detail: "Мы получили вашу заявку и свяжемся с вами в ближайшее время.",
    life: 3000,
  });
};

const showError = () => {
  toast.add({
    severity: "error",
    summary: "Ошибка",
    detail: "К сожалению, произошла ошибка. Пожалуйста, повторите попытку.",
    life: 3000,
  });
};
</script>

<template>
  <Nav />
  <img
    src="/src/assets/backdrop1.svg"
    class="w-full absolute -z-1 top-[550px] left-0"
  />
  <Hero />
  <div
    class="mx-auto w-full md:w-2/3 text-center p-6 mb-4 lg:mb-12 text-gray-700"
  >
    <h2 class="text-3xl font-extrabold mb-6">
      ЧТО ТАКОЕ
      <span
        class="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-emerald-400 to-sky-500 lg:inline"
        >WEB APP</span
      >
      В ТЕЛЕГРАМ?
    </h2>
    <p class="text-lg font-normal leading-8 text-left mb-4">
      Telegram Web App — это <b>веб-приложение</b>, с которым можно
      взаимодействовать <b>прямо в мессенджере</b> Telegram, не переключаясь на
      другое приложение или браузер.
    </p>
    <p class="text-lg font-normal leading-8 text-left">
      WebApp обладает функционалом, схожим с веб-сайтом. Однако благодаря
      интеграции с мессенджером веб-боты могут стать
      <b>полноценной заменой</b> большинству <b>мобильных приложений</b> и
      сайтов.
    </p>
  </div>
  <Areas />

  <Benefits />
  <Calc />
  <OurPros />
  <Examples />
  <Clients />
  <div
    class="mx-auto w-full lg:w-2/3 text-center p-6 text-gray-700 mt-4 lg:mt-12"
  >
    <h2 class="text-3xl font-extrabold mb-6 text-gray-700">
      ОСТАВЬТЕ ЗАЯВКУ НА БЕСПЛАТНУЮ КОНСУЛЬТАЦИЮ
    </h2>
  </div>
  <div class="mx-auto my-auto w-full p-6 lg:p-0 lg:w-1/3 h-70vh">
    <Toast />

    <Consult />
  </div>
  <Footer />
</template>

<style scoped></style>
