<template>
  <div
    class="mx-auto w-full lg:w-2/3 text-center lg:p-6 mt-4 lg:mt-12 text-gray-700 overflow-hidden"
  >
    <h2 class="text-3xl font-extrabold mb-6">
      СФЕРЫ ПРИМЕНЕНИЯ
      <span
        class="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-sky-400 via-violet-500 to-pink-500 lg:inline"
        >WEB APP</span
      >
    </h2>
    <div
      class="areas-wrapper flex overflow-x-auto p-4 gap-3 lg:gap-8 justify-between items-start"
    >
      <div
        v-for="(area, index) in areas"
        :key="index"
        class="area flex flex-col items-center gap-2 max-w-[84px] cursor-pointer"
        @click="setActive(index)"
        :class="{ active: activeIndex === index }"
      >
        <div
          class="area__icon w-20 h-20 flex items-center justify-center rounded-xl hover:scale-105 transition-all duration-300"
        >
          <img
            class="area-icon"
            :src="area.isActive ? area.iconActive : area.icon"
          />
        </div>
        <span
          class="area__title text-xs md:text-sm font-bold text-indigo-800"
          >{{ area.title }}</span
        >
      </div>
    </div>
    <AreaCard :area="areas[activeIndex]" />
  </div>
</template>

<script>
import AreaCard from "./AreaCard.vue";

export default {
  components: {
    AreaCard,
  },
  data() {
    return {
      activeIndex: 0,
      areas: [
        {
          title: "Интернет-магазины",
          icon: "src/assets/icons/icon__shop.svg",
          iconActive: "src/assets/icons/icon__shop_w.svg",
          isActive: true,
          desc: "Удобное и мгновенное взаимодействие с клиентами, упрощение процесса покупок и оперативного уведомления о новых продуктах и акциях.",
          fnc1: "Каталог товаров",
          fnc2: "Удобная корзина",
          fnc3: "Рекоммендации товаров",
          fnc4: "Уведомления через мессенджер",
          fnc5: "Интеграция платежных систем",
          fnc6: "Интеграция служб доставки",
        },
        {
          title: "Рестораны",
          icon: "src/assets/icons/icon__restaurant2.svg",
          iconActive: "src/assets/icons/icon__restaurant2_w.svg",
          isActive: false,
          desc: "Быстрая организация бронирования столиков, удобный заказ доставки, оперативное взаимодействие с клиентами через популярное мессенджер-приложение",
          fnc1: "Интерактивное меню",
          fnc2: "Рекоммендации блюд",
          fnc3: "Бронирование столов",
          fnc4: "Уведомления через мессенджер",
          fnc5: "Мультиязычность",
          fnc6: "Собственная система доставки",
        },
        {
          title: "Сфера услуг",
          icon: "src/assets/icons/icon__event.svg",
          iconActive: "src/assets/icons/icon__event_w.svg",
          isActive: false,
          desc: "Упрощение процесса записи на услуги, оперативный обмен информацией с клиентами и удобное уведомления о расписании и акциях",
          fnc1: "Онлайн-запись",
          fnc2: "Календарь для планирования встреч",
          fnc3: "Автоматическое напоминание о записи",
          fnc4: "Поддержка клиентов с помощью автоматизированных инструментов",
          fnc5: "Бонусная система",
          fnc6: "Уведомления через мессенджер",
        },
        {
          title: "Стартапы",
          icon: "src/assets/icons/icon__startup.svg",
          iconActive: "src/assets/icons/icon__startup_w.svg",
          isActive: false,
          desc: "Быстрое привлечение пользователей, удобное взаимодействие с клиентами и оперативное получение обратной связи.",
          fnc1: "Разнообразный функционал",
          fnc2: "Уникальный дизайн",
          fnc3: "Поддержка на различных платформах",
          fnc4: "Уведомления через мессенджер",
          fnc5: "Интеграция платежных систем",
          fnc6: "Интеграция служб доставки",
        },
        {
          title: "Игры",
          icon: "src/assets/icons/icon__game.svg",
          iconActive: "src/assets/icons/icon__game_w.svg",
          isActive: false,
          desc: "Быстрая монетизация игр, удобное взаимодействие с игроками и оперативное уведомление о новых обновлениях.",
          fnc1: "Внедрение игровых элементов в бизнес-процессы",
          fnc2: "Разработка игр",
          fnc3: "Проведение интерактивных викторин",
          fnc4: "Внедрение системы рейтингов",
          fnc5: "Создание тапперов",
          fnc6: "Создание собственного токена на блокчеине",
        },
        {
          title: "Отели",
          icon: "src/assets/icons/icon__hotel.svg",
          iconActive: "src/assets/icons/icon__hotel_w.svg",
          isActive: false,
          desc: "Удобное бронирование номеров, оперативное взаимодействие с гостями и уведомление о специальных предложениях.",
          fnc1: "Бронирование номеров",
          fnc2: "Бронирование экскурсий",
          fnc3: "Заказ еды в номер",
          fnc4: "Бронирование столика в ресторане отеля",
          fnc5: "Вызов трансфера из аэропорта",
          fnc6: "Интеграция платежных систем",
        },
        {
          title: "Онлайн курсы",
          icon: "src/assets/icons/icon__learning.svg",
          iconActive: "src/assets/icons/icon__learning_w.svg",
          isActive: false,
          desc: "Быстрое продвижение курсов, удобное взаимодействие с учениками и оперативная передача материалов.",
          fnc1: "Каталог курсов",
          fnc2: "Современный дизайн",
          fnc3: "Множество форматов контента",
          fnc4: "Подписки и контроль доступа",
          fnc5: "Интеграция тестов и экзаменов",
          fnc6: "Интеграция платежных систем",
        },
      ],
    };
  },
  methods: {
    setActive(index) {
      if (this.activeIndex !== index) {
        this.activeIndex = index;
        this.areas.forEach((area, i) => {
          area.isActive = i === index;
        });
      }
    },
  },
};
</script>

<style scoped>
.area .area__icon {
  background-color: rgba(245, 243, 255, 0.6);
  border: 2px solid rgba(255, 255, 255, 0.2);
}
.area.active .area__icon {
  background-color: #282246;
  border: none;
}
</style>
