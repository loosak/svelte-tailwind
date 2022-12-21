import './app.css';
import App from './App.svelte';

const app = new App({
  target: document.querySelector('#app'),
  props: {
    name: 'World',
  },
});

export default app;
