import { createApp } from 'vue'
import { createWebHistory, createRouter } from 'vue-router'
import App from './App'
import ViewSwitch from './components/ViewSwitch'
import CreateSwitch from './components/CreateSwitch'
import EditSwitch from './components/EditSwitch'
import SearchSwitches from './components/SearchSwitches'

const router = createRouter({
  history: createWebHistory(),
  routes: [
		{
      path: '/view',
      name: 'ViewSwitch',
      component: ViewSwitch
    },
    {
      path: '/create',
      name: 'CreateSwitch',
      component: CreateSwitch
    },
		{
      path: '/edit',
      name: 'EditSwitch',
      component: EditSwitch
    },
		{
			path: '/search',
      name: 'SearchSwitches',
      component: SearchSwitches
		}
  ],
});

const app = createApp(App);
app.use(router);
app.mount('#app');
