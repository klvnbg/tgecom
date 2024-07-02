<template>
  <div class="text-center">
    <div class="card flex flex-col gap-3 w-full">
      <InputGroup>
        <InputGroupAddon>
          <i class="pi pi-user"></i>
        </InputGroupAddon>
        <InputText placeholder="ФИО" v-model="user.fullName" />
      </InputGroup>

      <InputGroup>
        <InputGroupAddon>
          <i class="pi pi-phone"></i>
        </InputGroupAddon>
        <InputMask
          id="phone"
          v-model="user.mobile"
          mask="+7 (999) 999-9999"
          placeholder="+7 (999) 999-9999"
        />
      </InputGroup>

      <InputGroup>
        <InputGroupAddon>@</InputGroupAddon>
        <InputText placeholder="Ваш Email" v-model="user.email" />
      </InputGroup>

      <InputGroup>
        <InputGroupAddon><i class="pi pi-telegram"></i></InputGroupAddon>
        <InputText placeholder="Ваш Telegram" v-model="user.telegram" />
      </InputGroup>
    </div>
    <Button
      label="Отправить"
      type="submit"
      class="p-button-sm mt-6 w-full"
      @click="submitForm"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { useToast } from "primevue/usetoast";
import InputGroup from "primevue/inputgroup";
import InputGroupAddon from "primevue/inputgroupaddon";
import InputText from "primevue/inputtext";
import InputMask from "primevue/inputmask";
import Button from "primevue/button";

const user = ref({
  fullName: "",
  mobile: "",
  email: "",
  telegram: "",
});

const toast = useToast();
const emitCloseDialog = defineEmits(["closeDialog"]);

const showSuccess = () => {
  toast.add({
    severity: "success",
    summary: "Спасибо",
    detail: "Мы получили вашу заявку и свяжемся с вами в ближайшее время.",
    life: 3000,
  });
};

const showError = (message) => {
  toast.add({
    severity: "error",
    summary: "Ошибка",
    detail: message,
    life: 3000,
  });
};

const showWarn = (message) => {
  toast.add({
    severity: "warn",
    summary: "Внимание",
    detail: message,
    life: 3000,
  });
};

const submitForm = async () => {
  // Validate form fields
  if (!user.value.fullName || !user.value.mobile || !user.value.email) {
    showWarn("Пожалуйста, заполните все поля.");
    return;
  }

  const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
  const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;
  const message = `
*Заявка с TGEcom:*\n
*Имя:* ${user.value.fullName}
*Телефон:* ${user.value.mobile}
*Email:* ${user.value.email}
*TG:* ${user.value.telegram}
  `;

  try {
    await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      chat_id: chatId,
      text: message,
      parse_mode: "Markdown",
    });

    // Clear form fields after successful submission
    user.value.fullName = "";
    user.value.mobile = "";
    user.value.email = "";
    user.value.telegram = "";

    showSuccess();
    emitCloseDialog("closeDialog");
  } catch (error) {
    console.error("Error sending message to Telegram:", error);
    showError("К сожалению, произошла ошибка. Пожалуйста, повторите попытку.");
  }
};
</script>

<style scoped>
.field {
  margin-bottom: 1rem;
}
.p-inputtext {
  flex: 1;
}
.p-dialog-header {
  padding: 0 !important;
}
.p-button {
  background-color: rgb(29 78 216);
}
.p-button:hover {
  background-color: rgb(30 64 175);
}
.p-inputgroup {
  background: #fff;
}
</style>
