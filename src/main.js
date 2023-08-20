import { createApp } from 'vue';
import App2 from './App2';

// globally register components
import Header from '../src/components/header-footer/Header';

const app = createApp(App2);


// note: Vue converts to kebab-case under the hood
app.component('app-header', Header);

app.mount('#app');