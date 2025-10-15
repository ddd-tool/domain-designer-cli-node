import './assets/main.css';
import 'primeicons/primeicons.css';
import { createApp } from 'vue';
import App from './App.vue';
import { PrimeVue, Aura, Tooltip } from '@ddd-tool/domain-designer-ui-component';
import Button from 'primevue/button';
import Dock from 'primevue/dock';
const app = createApp(App);
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            prefix: 'p',
            darkModeSelector: 'light',
            cssLayer: true,
        },
    },
});
app.component('Button', Button);
app.component('Dock', Dock);
app.directive('tooltip', Tooltip);
app.mount('#app');
//# sourceMappingURL=main.js.map