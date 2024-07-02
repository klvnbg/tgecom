<template>
  <div
    class="mx-auto w-full lg:w-2/3 text-center p-6 mt-4 lg:mt-12 text-gray-700"
  >
    <h2 class="text-3xl font-extrabold mb-6">
      ПРЕИМУЩЕСТВА ИСПОЛЬЗОВАНИЯ
      <span
        class="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-l from-sky-400 via-violet-500 to-pink-500 lg:inline"
        >WEB APPS</span
      >
    </h2>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 text-start mt-12">
      <div
        class="relative flex flex-col col-span-2 lg:col-span-1 h-70 rounded-2xl aspect-square text-white bg-gradient-to-b from-emerald-400 to-sky-500 border border-indigo-100 p-8 shadow-2xl shadow-blue-100"
      >
        <span class="text-xl font-bold mb-2">Кроссплатформенность</span>
        <span class="text-base font-normal"
          >Веб-боты в Telegram функционируют на любой операционной системе и
          оптимизированы для работы на всех устройствах.</span
        >
        <img
          src="../assets/crossplatform.svg"
          class="absolute w-full bottom-5 right-0"
        />
      </div>
      <div
        class="relative flex flex-col col-span-2 lg:col-span-1 items-start justify-top h-70 rounded-2xl aspect-square text-white bg-gradient-to-b from-sky-300 to-indigo-700 border border-indigo-100 p-8 shadow-2xl shadow-violet-100 overflow-hidden"
      >
        <span class="text-xl font-bold mb-2">Уникальный дизайн</span>
        <span class="text-base font-normal"
          >Используя WebApp, мы выходим за рамки стандартного интерфейса
          мессенджера и создаём приложение с неповторимым дизайном.</span
        >
        <img
          src="../assets/design.png"
          class="absolute w-full -bottom-20 hover:-bottom-16 right-0 transition-all duration-500"
        />
      </div>
      <div
        class="relative flex flex-col col-span-2 lg:col-span-1 items-start justify-top h-70 rounded-2xl aspect-square text-white bg-gradient-to-b from-amber-300 to-red-500 border border-indigo-100 p-8 shadow-2xl shadow-amber-100 overflow-hidden"
      >
        <span class="text-xl font-bold mb-2">Экономия бюджета</span>
        <span class="text-base font-normal"
          >Разработка WebApps Telegram обходится в среднем на 70% дешевле, чем
          разработка мобильного приложения.</span
        >
        <img
          src="../assets/economy.png"
          class="absolute w-full -bottom-20 -right-6 hover:-bottom-16 hover:-right-2 transition-all duration-500"
        />
      </div>
      <div
        class="relative col-span-2 flex flex-col items-start justify-top h-70 rounded-2xl text-white bg-gradient-to-br from-fuchsia-500 to-violet-700 border border-indigo-100 p-8 shadow-2xl shadow-sky-100 overflow-hidden"
      >
        <span class="text-xl font-bold mb-2">Бесшовный переход</span>
        <span class="text-base font-normal"
          >Чтобы воспользоваться WebApp Telegram, пользователям не нужно
          устанавливать дополнительное приложение — это упрощает переход в вашу
          систему.</span
        >
        <img
          src="../assets/DS2.png"
          class="absolute w-full -bottom-8 right-0 hover:-bottom-6 transition-all duration-500"
        />
      </div>

      <div
        class="relative flex flex-col col-span-2 lg:col-span-1 items-start justify-top h-70 rounded-2xl aspect-square text-white bg-gradient-to-b to-rose-400 from-pink-600 border border-indigo-100 p-8 shadow-2xl shadow-pink-100 overflow-hidden"
      >
        <span class="text-xl font-bold mb-2">Push-уведомления</span>
        <span class="text-base font-normal"
          >В отличие от мобильного приложения или сайта, WebApps отправляет
          уведомления напрямую в мессенджер, что значительно повышает
          вероятность их доставки.</span
        >
        <img
          src="../assets/rassilka.png"
          class="absolute w-full -bottom-6 right-0 hover:bottom-2 transition-all duration-500"
        />
      </div>
      <div
        class="relative flex flex-col col-span-2 lg:col-span-1 items-start justify-top h-70 rounded-2xl aspect-square text-white bg-gradient-to-br to-fuchsia-500 from-pink-600 border border-indigo-100 p-8 shadow-2xl shadow-sky-100 overflow-hidden"
      >
        <span class="text-xl font-bold mb-2">Единая экосистема</span>
        <span class="text-base font-normal"
          >WebApps легко интегрируется с другими инструментами Telegram, такими
          как чат-боты, каналы и юзерботы. Это позволяет сделать вашего веб-бота
          естественной частью платформы Telegram.</span
        >
        <img
          src="../assets/tab-decoration.png"
          class="absolute w-full bottom-0 right-0"
        />
      </div>
      <div
        class="relative flex flex-col col-span-2 lg:col-span-1 items-start justify-top h-70 rounded-2xl aspect-square text-white bg-gradient-to-b to-sky-300 from-indigo-700 border border-indigo-100 p-8 shadow-2xl shadow-indigo-100"
      >
        <span class="text-xl font-bold mb-2">Онлайн оплата и доставка</span>
        <span class="text-base font-normal"
          >Есть возможность подключить любые сервисы доставки и оплаты, в том
          числе с использованием криптовалюты.</span
        >
        <img
          src="../assets/payment_delivery.svg"
          class="absolute w-full bottom-5 right-0"
        />
      </div>
      <div
        class="relative flex flex-col col-span-2 lg:col-span-1 items-start justify-top h-70 rounded-2xl aspect-square text-white bg-gradient-to-b from-gray-600 to-gray-900 border border-indigo-100 p-8 shadow-2xl shadow-pink-100"
      >
        <span class="text-xl font-bold mb-2">Мультиязычность</span>
        <span class="text-base font-normal"
          >Есть возможность интегрировать перевод на любой язык без значительных
          затрат и переработок приложения.</span
        >
        <img
          src="../assets/multilang.png"
          class="absolute w-full min-h-[40px] bottom-5 right-0"
        />
      </div>
    </div>
  </div>
</template>
