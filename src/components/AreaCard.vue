<template>
  <div class="w-full lg:mx-auto mb-6">
    <div
      class="mx-6 flex flex-wrap justify-between border border-indigo-200 bg-white rounded-2xl shadow-2xl shadow-indigo-100 overflow-hidden"
    >
      <div
        class="card__content_left flex flex-col lg:flex-1 gap-3 bg-white p-4 lg:px-8 lg:py-8"
      >
        <h3 class="font-bold text-xl lg:text-3xl">{{ area.title }}</h3>
        <span class="font-normal text-sm lg:text-lg text-left">{{
          area.desc
        }}</span>
        <ul class="text-sm lg:text-lg flex flex-col gap-4 text-left">
          <li class="flex gap-2 items-center">
            <i class="pi pi-check-circle"></i>{{ area.fnc1 }}
          </li>
          <li class="flex gap-2 items-center">
            <i class="pi pi-check-circle"></i>{{ area.fnc2 }}
          </li>
          <li class="flex gap-2 items-center">
            <i class="pi pi-check-circle"></i>{{ area.fnc3 }}
          </li>
        </ul>
      </div>
      <div
        class="card__content_right before:hidden md:before:block flex lg:flex-1 grow items-center w-full relative bg-violet-50 p-4"
      >
        <div
          class="benefits flex flex-col w-full rounded-xl border border-indigo-200 bg-white text-left"
        >
          <div
            class="benefit flex items-center gap-4 p-5 font-normal text-sm lg:text-lg border-b border-indigo-200"
          >
            <i class="pi pi-megaphone"></i>
            {{ area.fnc4 }}
          </div>
          <div
            class="benefit flex items-center gap-4 p-5 font-normal text-sm lg:text-lg border-b border-indigo-200"
          >
            <i class="pi pi-megaphone"></i>
            {{ area.fnc5 }}
          </div>
          <div
            class="benefit flex items-center gap-4 p-5 font-normal text-sm lg:text-lg border-b border-indigo-200"
          >
            <i class="pi pi-megaphone"></i>
            {{ area.fnc6 }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    area: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.card__content_right::before {
  content: url(../assets/areacard_before.svg);
  position: absolute;
  left: -40px;
  top: -20;
}
</style>
