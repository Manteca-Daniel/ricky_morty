import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import VueSplide from '@splidejs/vue-splide';
import { createRouter, createWebHistory } from 'vue-router';

import Home from './Pages/Home.vue';
import PersonajesCapitulo from './Pages/PersonajesCapitulo.vue';
import Personaje from './Pages/Personaje.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/personajes/:id',
    name: 'PersonajesCapitulo',
    component: PersonajesCapitulo,
    props: true
  },
  {
    path: '/personajes/:id',
    name: 'Personaje',
    component: Personaje,
    props: true
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

const app = createApp(App);
app.use(router);
app.use(VueSplide);

app.mount('#app');
