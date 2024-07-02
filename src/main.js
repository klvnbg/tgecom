import './style.css';
import 'primeicons/primeicons.css';

import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import App from './App.vue';

import Ripple from 'primevue/ripple';

import Drawer from 'primevue/drawer';
import Button from 'primevue/button';
import Dialog from "primevue/dialog";
import InputText from 'primevue/inputtext';
import InputMask from 'primevue/inputmask';
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import FloatLabel from 'primevue/floatlabel';
import Avatar from 'primevue/avatar';

import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';

import Banner from "./components/Banner.vue";
import Nav from "./components/Nav.vue";
import Hero from "./components/Hero.vue";
import Areas from "./components/Areas.vue";
import AreaCard from "./components/AreaCard.vue";
import Benefits from "./components/Benefits.vue";
import Calculator from "./components/Calculator.vue";
import Calc from "./components/Calc.vue";
import Card from "./components/Card.vue";
import OurPros from "./components/OurPros.vue";
import Clients from "./components/Clients.vue";
import Examples from "./components/Examples.vue";
import Consult from "./components/Consult.vue";
import Footer from "./components/Footer.vue";

const app = createApp(App);

app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            prefix: 'p',
            darkModeSelector: 'manual',
            cssLayer: false
        }
    }
});

app.use(ToastService);

app.component('Drawer', Drawer);
app.component('Button', Button);
app.component('Dialog', Dialog);
app.component('InputText', InputText);
app.component('InputMask', InputMask);
app.component('InputGroup', InputGroup);
app.component('InputGroupAddon', InputGroupAddon);
app.component('FloatLabel', FloatLabel);
app.component('Avatar', Avatar);

app.component('Toast', Toast);

app.component('Banner', Banner);
app.component('Nav', Nav);
app.component('Hero', Hero);
app.component('Areas', Areas);
app.component('AreaCard', AreaCard);
app.component('Benefits', Benefits);
app.component('Calculator', Calculator);
app.component('Calc', Calc);
app.component('Card', Card);
app.component('OurPros', OurPros);
app.component('Clients', Clients);
app.component('Examples', Examples);
app.component('Consult', Consult);
app.component('Footer', Footer);

app.directive('ripple', Ripple);

app.mount('#app');
