<template>
  <nav class="bg-transparent w-full fixed z-20 top-0 start-0">
    <div class="flex flex-wrap items-center justify-between p-6">
      <a
        href="#"
        class="flex items-center space-x-3 rtl:space-x-reverse bg-white py-2 px-4 border rounded-xl border-indigo-200 min-h-[50px] dark:bg-gray-800"
      >
        <img src="../assets/logo.svg" class="h-8" alt="TGEcom Logo" />
        <span
          class="self-center text-2xl text-gray-900 font-semibold whitespace-nowrap dark:text-white"
          >TGEcom</span
        >
      </a>

      <div
        class="flex items-center gap-6 lg:order-2 lg:space-x-0 rtl:space-x-reverse bg-white py-2 lg:px-4 rounded-xl md:border md:border-indigo-200 h-[50px]"
      >
        <a
          href="tel:+79999999999"
          class="hidden lg:block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >+7 (999) 999-99-99</a
        >
        <button
          type="button"
          class="hidden lg:block text-white bg-blue-700 hover:bg-blue-800 hover:scale-95 transition focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          @click="visibleConsult = true"
        >
          Оставить заявку
        </button>
        <button
          data-collapse-toggle="navbar-sticky"
          type="button"
          class="inline-flex items-center p-2 w-12 h-12 justify-center text-sm text-gray-700 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 border border-indigo-200 md:border-0"
          aria-controls="navbar-sticky"
          aria-expanded="false"
          @click="toggleMenu"
        >
          <span class="sr-only">Меню</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
      <div
        class="items-center justify-between mt-4 lg:mt-0 hidden w-full lg:flex lg:w-auto lg:order-1 bg-white p-2 lg:px-4 rounded-xl border border-indigo-200 min-h-[50px]"
        id="navbar-sticky"
      >
        <ul
          class="flex flex-col md:p-0 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0"
        >
          <li>
            <a
              href="#"
              class="block py-2 px-3 text-white bg-blue-700 rounded-lg md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
              aria-current="page"
              >Главная</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block py-2 px-3 text-gray-900 rounded-lg hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >Решения</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block py-2 px-3 text-gray-900 rounded-lg hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >Стоимость</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block py-2 px-3 text-gray-900 rounded-lg hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >Блог</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block py-2 px-3 text-gray-900 rounded-lg hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >Контакты</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- Include the Dialog for Consult component -->
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
import { ref } from "vue";

const visibleConsult = ref(false);

function toggleMenu() {
  const navbar = document.getElementById("navbar-sticky");
  navbar.classList.toggle("hidden");
}

function handleCloseDialog() {
  visibleConsult.value = false;
}
</script>

<style scoped></style>
