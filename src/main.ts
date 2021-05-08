import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from '@/store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/fonts/iconfont';
import IconSvg from '@/components/iconsvg/iconsvg.vue';
import config from './utils/appconfig';
import { Skin } from '@/skin/skin';
import i18n from '@/i18n';
// import { initLog, gblog } from './utils/logger';

// 初始化日志
// initLog();
// gblog.info('init main log 1'); // TODO  delete in project
// 加载用户主题
if (localStorage.getItem('themeValue')) {
  Skin.changeTheme(localStorage.getItem('themeValue'));
} else {
  Skin.changeTheme('white');
}

config(store).then(() => {
  Vue.config.productionTip = false;
  Vue.use(ElementUI);
  Vue.component('icon-svg', IconSvg);
  const whiteList = ['/login'];
  router.beforeEach(async (to: any, from: any, next: any) => {
    if (store.getters.token) {
      if (to.path === '/login') {
        next({ path: '/' });
      } else {
          next();
      }
    } else {
      if (whiteList.indexOf(to.path) !== -1) {
        next();
      } else {
        next('/login');
      }
    }
  });

  router.afterEach(() => {});

  new Vue({
    router,
    store,
    i18n,
    render: (h: any) => h(App)
  }).$mount('#app');
});
