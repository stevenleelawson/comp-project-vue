import { createApp } from 'vue';
import App from './App';

// globally register components
import Header from '../src/components/header-footer/Header';

const app = createApp(App);

app.component('app-header', Header);

app.mount('#app');