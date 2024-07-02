<template>
  <div class="px-4 py-8 md:px-6 lg:px-8 text-center">
    <div
      class="mx-auto w-full lg:w-2/3 text-center p-6 mt-4 lg:mt-12 text-gray-700"
    >
      <h2 class="text-3xl font-extrabold mb-6">ПРИМЕРЫ РЕАЛИЗАЦИИ</h2>
    </div>
    <div
      class="flex lg:justify-center overflow-x-auto snap-x snap-mandatory space-x-4"
    >
      <Card :areas="areas" class="snap-center flex-shrink-0 w-4/5" />
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";

export default {
  components: {
    Card,
  },
  data() {
    return {
      areas: [
        {
          title: "DPD Россия",
          link: "https://t.me/DPD_Russia_lead_bot/start",
          appImg: "../src/assets/examples/DPD/tg_webapp_logo.png",
          appName: "DPD Телеграм Приложение",
          appDecsr1:
            "🚀Здесь собраны все актуальные предложения по доставке DPD🚀",
          appDecsr2:
            "Ознакомьтесь с предложениями и оставьте заявку. Наш специалист свяжется с вами, чтобы рассказать подробности и помочь...",
          userImg: "../src/assets/examples/DPD/tg_bot_logo.png",
        },
        {
          title: "GEMPRO Boutique",
          link: "https://t.me/gemproboutique_bot/catalogue",
          appImg: "../src/assets/examples/GPB/tg_webapp_logo.png",
          appName: "GP Boutique Каталог",
          appDecsr1: "Украшения на каждый день и на все случаи жизни.",
          appDecsr2:
            "Неограниченные возможности для создания многослойной, универсальной коллекции украшений, которую можно носить сейчас и...",
          userImg: "../src/assets/examples/GPB/tg_bot_logo.png",
        },
        {
          title: "Драгоценный Спектр",
          link: "https://t.me/PreciousSpectrum_bot/course",
          appImg: "../src/assets/examples/PrSpc/tg_webapp_logo.png",
          appName: "Курс Драгоценный Спектр",
          appDecsr1:
            "Обучающий курс, благодаря которому вы научитесь определять 50+ драгоценных камней.",
          appDecsr2: "",
          userImg: "../src/assets/examples/PrSpc/tg_bot_logo.png",
        },
        {
          title: "АнтиМеню",
          link: "https://t.me/test_antimenu_bot/menu",
          appImg: "../src/assets/examples/AntiMenu/tg_webapp_logo.png",
          appName: "АнтиМеню для Вашего Ресторана",
          appDecsr1: "Мини приложение вашего заведения прямо в Телеграм.",
          appDecsr2:
            "Подробное, красивое меню. Ваша система бронирования. На любом языке и на всех сразу. Разработка и запуск за 14 дней!",
          userImg: "../src/assets/examples/AntiMenu/tg_bot_logo.png",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
