<template>
  <div class="cost-calculator">
    <!-- Goods Section -->
    <div class="w-full flex gap-4 pb-1">
      <div
        class="bg-slate-200 p-4 rounded-t-2xl flex flex-1 justify-between font-bold"
      >
        <span class="font-bold">Услуга</span>
        <span>Кол-во</span>
      </div>
    </div>
    <!-- Server Cost Section -->
    <div
      class="w-full flex gap-1 pb-1"
      v-for="(item, index) in server"
      :key="index"
    >
      <div class="bg-violet-50 p-4 flex flex-1 justify-between gap-4">
        <span>{{ item.service }}</span>
        <span>{{ item.cost }}₽</span>
      </div>
      <div class="bg-violet-50 p-4">
        <input
          class="text-base bg-slate-50 rounded-lg min-w-[50px] text-center"
          type="checkbox"
          v-model="item.checked"
          @change="calculateTotal"
          disabled
        />
      </div>
    </div>

    <!-- Goods Section -->
    <div class="w-full flex gap-1 pb-1">
      <span class="w-full p-4 pb-1 font-bold bg-sky-100">Товары</span>
    </div>
    <div
      class="w-full flex gap-1 pb-1"
      v-for="(item, index) in goods"
      :key="index"
    >
      <div class="bg-sky-50 p-4 flex flex-1 justify-between gap-4">
        <span>{{ item.service }}</span>
        <span>{{ item.cost }}₽</span>
      </div>
      <div class="bg-sky-50 p-4">
        <input
          class="text-base bg-slate-50 rounded-lg max-w-[50px] text-center"
          type="number"
          v-model="item.quantity"
          :min="item.minQuantity"
          @input="calculateTotal"
        />
      </div>
    </div>

    <!-- Extra Blocks Section -->
    <div class="w-full flex gap-1 pb-1">
      <span class="w-full p-4 pb-1 font-bold bg-indigo-100"
        >Дополнительные блоки</span
      >
    </div>
    <div
      class="w-full flex gap-1 pb-1"
      v-for="(item, index) in extrablocks"
      :key="index"
    >
      <div class="bg-indigo-50 p-4 flex flex-1 justify-between gap-4">
        <span>{{ item.service }}</span>
        <span>{{ item.cost }}₽</span>
      </div>
      <div class="bg-indigo-50 p-4">
        <input
          class="text-base bg-slate-50 rounded-lg max-w-[50px] text-center"
          type="number"
          v-model="item.quantity"
          @input="calculateTotal"
        />
      </div>
    </div>

    <!-- Payment Methods Section -->
    <div class="w-full flex gap-1 pb-1">
      <span class="w-full p-4 pb-1 font-bold bg-violet-100"
        >Способы оплаты</span
      >
    </div>
    <div
      class="w-full flex gap-1 pb-1"
      v-for="(item, index) in paymentMethods"
      :key="index"
    >
      <div class="bg-violet-50 p-4 flex flex-1 justify-between gap-4">
        <span>{{ item.service }}</span>
        <span>{{ item.cost }}₽</span>
      </div>
      <div class="bg-violet-50 p-4">
        <input
          class="text-base bg-slate-50 rounded-lg min-w-[50px] text-center"
          type="checkbox"
          v-model="item.checked"
          @change="calculateTotal"
        />
      </div>
    </div>

    <!-- Delivery Methods Section -->
    <div class="w-full flex gap-1 pb-1">
      <span class="w-full p-4 pb-1 font-bold bg-fuchsia-100"
        >Способы доставки</span
      >
    </div>
    <div
      class="w-full flex gap-1 pb-1"
      v-for="(item, index) in deliveryMethods"
      :key="index"
    >
      <div class="bg-fuchsia-50 p-4 flex flex-1 justify-between gap-4">
        <span>{{ item.service }}</span>
        <span>{{ item.cost }}₽</span>
      </div>
      <div class="bg-fuchsia-50 p-4">
        <input
          class="text-base bg-slate-50 rounded-lg min-w-[50px] text-center"
          type="checkbox"
          v-model="item.checked"
          @change="calculateTotal"
        />
      </div>
    </div>

    <!-- Extra Value Section -->
    <div class="w-full flex gap-1 pb-1">
      <span class="w-full p-4 pb-1 font-bold bg-red-100"
        >Дополнительные возможности</span
      >
    </div>
    <div
      class="w-full flex gap-1 pb-1"
      v-for="(item, index) in extraValues"
      :key="index"
    >
      <div class="bg-red-50 p-4 flex flex-1 justify-between gap-4">
        <span>{{ item.service }}</span>
        <span>{{ item.cost }}₽</span>
      </div>
      <div class="bg-red-50 p-4">
        <input
          class="text-base bg-slate-50 rounded-lg min-w-[50px] text-center"
          type="checkbox"
          v-model="item.checked"
          @change="calculateTotal"
        />
      </div>
    </div>

    <!-- Extra Design Section -->
    <div class="w-full flex gap-1 pb-1">
      <span class="w-full p-4 pb-1 font-bold bg-orange-100"
        >Дополнительный дизайн магазина</span
      >
    </div>
    <div
      class="w-full flex gap-1 pb-1"
      v-for="(item, index) in extraDesign"
      :key="index"
    >
      <div class="bg-orange-50 p-4 flex flex-1 justify-between gap-4">
        <span>{{ item.service }}</span>
        <span>{{ item.cost }}₽</span>
      </div>
      <div class="bg-orange-50 p-4">
        <input
          class="text-base bg-slate-50 rounded-lg min-w-[50px] text-center"
          type="checkbox"
          v-model="item.checked"
          @change="calculateTotal"
        />
      </div>
    </div>

    <!-- Total Cost Section -->
    <div class="w-full flex gap-1 pb-1">
      <span
        class="bg-slate-200 p-4 rounded-b-2xl flex flex-1 justify-between font-bold"
      >
        Итого: {{ totalCost }}₽
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      server: [{ service: "Сервер, БД (год)", cost: 20000, checked: true }],
      goods: [
        { service: "Категории", cost: 0, quantity: 0, minQuantity: 0 },
        {
          service: "1 товар в XLS/YML/CSV",
          cost: 100,
          quantity: 0,
          minQuantity: 10,
        },
        {
          service: "1 товар в личку",
          cost: 300,
          quantity: 0,
          minQuantity: 10,
        },
      ],
      extrablocks: [
        { service: "1 лендинг страница (под заказ)", cost: 5000, quantity: 0 },
        {
          service: "1 форма обратной связи с выгрузкой в Google таблицы",
          cost: 5000,
          quantity: 0,
        },
        { service: "Подключение iFrame", cost: 2500, quantity: 0 },
        { service: "Другое", cost: 5000, quantity: 0 },
      ],
      paymentMethods: [
        {
          service:
            "Оплата онлайн на расчётный счёт (для юр лиц, ип, самозанятых)",
          cost: 3000,
          checked: false,
        },
        {
          service:
            "Оплата через систему СБП по номеру телефона (для физических лиц)",
          cost: 1000,
          checked: false,
        },
        {
          service: "Оплата по выставленному счету на расчетный счет в банке",
          cost: 2000,
          checked: false,
        },
        { service: "Оплата наличными", cost: 1000, checked: false },
        { service: "Оплата криптовалютой", cost: 5000, checked: false },
        { service: "Другое", cost: 5000, checked: false },
      ],
      deliveryMethods: [
        { service: "Самовывоз", cost: 500, quantity: 0 },
        { service: "Курьером", cost: 500, quantity: 0 },
        { service: "Курьерской компанией", cost: 500, quantity: 0 },
        { service: "Другое", cost: 500, quantity: 0 },
      ],
      extraValues: [
        {
          service:
            "Уведомления в Телеграме Владельцу магазина о поступающих заказах",
          cost: 2500,
          quantity: 0,
        },
        {
          service:
            "Уведомления в Телеграме Покупателям о заказах и изменении их статусов",
          cost: 2500,
          quantity: 0,
        },
        {
          service:
            "Управление остатками товаров и их учет при продажах в Магазине",
          cost: 2500,
          quantity: 0,
        },
        {
          service: "Настройка системы скидок и промокодов",
          cost: 2000,
          quantity: 0,
        },
        {
          service:
            "Ссылка для открытия магазина-приложения/на конкретный товар прямо в каналах, группах и чатах",
          cost: 4000,
          quantity: 0,
        },
      ],
      extraDesign: [
        {
          service:
            "Логотип и ссылка на Ваш канал / группу / сайт вверху на главном экране",
          cost: 4000,
          quantity: 0,
        },
        {
          service: "Слайдер на главном экране магазина",
          cost: 7000,
          quantity: 0,
        },
        {
          service: "Меню категорий магазина с картинками на главном экране",
          cost: 5000,
          quantity: 0,
        },
        {
          service: "Баннер на главной странице или на страницах с товарами",
          cost: 5000,
          quantity: 0,
        },
        {
          service:
            "Дополнительные разделы и страницы о способах оплаты и доставки, отзывах, контактах и т.д.",
          cost: 4000,
          quantity: 0,
        },
        {
          service:
            "Боковое меню магазина с ссылками на ваши аккаунты в соцсетях и дополнительные разделы, и номером телефона.",
          cost: 3500,
          quantity: 0,
        },
        {
          service:
            "Подвал магазина с ссылками на ваши аккаунты в соцсетях и дополнительные разделы, и номером телефона.",
          cost: 3500,
          quantity: 0,
        },
      ],
      totalCost: 0,
    };
  },
  methods: {
    validateQuantity(item) {
      if (item.quantity < item.minQuantity) {
        item.quantity = item.minQuantity;
      }
      this.calculateTotal();
    },
    calculateTotal() {
      const calculateSectionCost = (section, isCheckbox = false) => {
        return section.reduce((acc, item) => {
          return (
            acc +
            (isCheckbox
              ? item.checked
                ? item.cost
                : 0
              : item.cost * item.quantity)
          );
        }, 0);
      };

      this.totalCost =
        calculateSectionCost(this.goods) +
        calculateSectionCost(this.extrablocks) +
        calculateSectionCost(this.paymentMethods, true) +
        calculateSectionCost(this.deliveryMethods, true) +
        calculateSectionCost(this.extraValues, true) +
        calculateSectionCost(this.extraDesign, true) +
        calculateSectionCost(this.server, true);
    },
  },
  mounted() {
    this.calculateTotal();
  },
};
</script>

<style scoped>
.p-dialog-header {
  background: transparent !important;
}
</style>
