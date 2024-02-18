import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import '@mdi/font/css/materialdesignicons.css'
import { md3 } from 'vuetify/blueprints'

const vuetify = createVuetify({
    md3,
});

async function prepareApp() {
    if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
        const { worker } = await import('../mocks/browser.js');
        await worker.start();
    }
}

async function initializeApp() {
    await prepareApp();

    createApp(App).use(router).use(vuetify).mount('#app');
}

initializeApp();