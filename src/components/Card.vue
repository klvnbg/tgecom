<template>
  <div
    v-for="(area, index) in areas"
    :key="index"
    class="snap-center flex-shrink-0 w-4/5 lg:w-1/5 lg:justify-center lg:items-center lg:flex"
    v-bind="$attrs"
  >
    <div class="flex justify-center items-end gap-2.5 my-8 text-left">
      <div
        class="flex flex-col w-full leading-1.5 p-4 border-gray-200 bg-gray-100 hover:bg-white hover:-translate-y-3 rounded-2xl dark:bg-gray-700 hover:shadow-2xl transition ease-in-out duration-500"
      >
        <div class="flex items-center space-x-2 rtl:space-x-reverse">
          <span
            class="flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white"
          >
            <img class="w-6 h-6 rounded-full" :src="area.userImg" alt="" />
            {{ area.title }}</span
          >
        </div>

        <p class="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
          <a
            :href="area.link"
            class="text-blue-700 dark:text-blue-500 underline hover:no-underline text-xs break-all"
            >{{ area.link }}</a
          >
        </p>
        <a
          :href="area.link"
          class="flex flex-col items-center bg-gray-50 rounded-xl p-4 mb-2"
        >
          <img :src="area.appImg" class="rounded-lg mb-2" />
          <span
            class="w-full text-left text-sm font-medium py-2.5 text-gray-900 dark:text-white"
            >{{ area.appName }}</span
          >
          <span
            class="text-sm w-full text-left font-normal text-gray-900 pb-2.5 dark:text-white"
            >{{ area.appDecsr1 }}</span
          >
          <span
            class="text-sm w-full text-left font-normal text-gray-900 pb-2.5 dark:text-white"
            >{{ area.appDecsr2 }}</span
          >
          <span
            class="text-sm font-medium text-gray-900 dark:text-white mb-2 border-t-2 border-gray-200 hover:text-blue-700 pt-4 w-full text-center"
            >ЗАПУСТИТЬ</span
          >
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    areas: {
      type: Array,
      required: true,
    },
  },
};
</script>
