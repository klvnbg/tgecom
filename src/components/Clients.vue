<template>
  <div class="px-4 py-8 md:px-6 lg:px-8 text-center">
    <div
      class="mx-auto w-full lg:w-2/3 text-center p-6 mt-4 lg:mt-12 text-gray-700"
    >
      <h2 class="text-3xl font-extrabold mb-6">НАМ ДОВЕРЯЮТ</h2>
    </div>

    <div class="flex flex-col justify-between items-center">
      <div
        class="w-full lg:w-2/3 text-center lg:p-6 flex flex-wrap gap-4 lg:justify-between justify-around"
      >
        <!--DPD-->
        <div
          class="dpd lg:w-48 lg:h-48 w-36 h-36 rounded-2xl p-4 flex justify-center items-center"
        >
          <img src="../assets/clients/dpd.svg" alt="" class="max-h-14" />
        </div>
        <!--GPB-->
        <div
          class="gpb lg:w-48 lg:h-48 w-36 h-36 rounded-2xl p-4 flex justify-center items-center"
        >
          <img src="../assets/clients/gpb.svg" alt="" class="max-h-14" />
        </div>
        <!--Absolut-->
        <div
          class="absolut lg:w-48 lg:h-48 w-36 h-36 rounded-2xl p-4 flex justify-center items-center"
        >
          <img src="../assets/clients/absolut.svg" alt="" />
        </div>
      </div>
      <div
        class="w-full lg:w-2/3 text-center lg:p-6 pt-4 flex flex-wrap gap-4 justify-around"
      >
        <!--MGCom-->
        <div
          class="mg lg:w-48 lg:h-48 w-36 h-36 rounded-2xl p-4 flex justify-center items-center"
        >
          <img src="../assets/clients/mg.svg" alt="" class="max-h-14" />
        </div>
        <!--Biplane-->
        <div
          class="biplane lg:w-48 lg:h-48 w-36 h-36 rounded-2xl p-4 flex justify-center items-center"
        >
          <img src="../assets/clients/biplane.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mg {
  background: #0099fe;
}
.dpd {
  background: #e40138;
}
.gpb {
  background: #7345fd;
}
.absolut {
  background: #3c3b39;
}
.biplane {
  background: #2d2d2d;
}
</style>
