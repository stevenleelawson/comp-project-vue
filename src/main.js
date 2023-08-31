import { createApp } from 'vue';
import App from './App';

// globally register components
import Header from '../src/components/header-footer/Header';

const app = createApp(App);

// CUSTOM DIRECTIVE

app.directive('awesome', {
	beforeMount(el,binding) {
		// binding is binding to a passed value in v-awesome directive

		// OLD AND IN THE WAY:
		// el.innerHTML = 'Hey chip chiup!!'
		el.innerHTML = binding.value;
	}
})


// note: Vue converts to kebab-case under the hood
app.component('app-header', Header);

app.mount('#app');