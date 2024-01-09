import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';


/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './theme/tailwind.css';
import './theme/generales.css';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faEye, faEyeSlash} from '@fortawesome/free-regular-svg-icons'
import { faPhone, faCode, faLock, faCircleUser, faMoneyBill,faBook, faBell, faScrewdriverWrench, faBuilding, faCircleExclamation, faArrowLeft, faChartColumn, faScroll, faSackDollar, faChartSimple, faWallet, faCircleDollarToSlot, faUsers, faCircleInfo, faDollarSign, faUser} from '@fortawesome/free-solid-svg-icons'


/* add icons to the library */
library.add(faUser,faPhone,faCode,faLock,faEye,faEyeSlash,faCircleUser,faMoneyBill,faBook,faBuilding,faBell,faScrewdriverWrench,faCircleExclamation,faArrowLeft,faChartColumn,faScroll,faSackDollar,faChartSimple,faWallet,faCircleDollarToSlot,faUsers,faCircleInfo,faDollarSign)

const app = createApp(App)
  .use(IonicVue)
  .use(router);
  
app.component('font-awesome-icon', FontAwesomeIcon);

router.isReady().then(() => {
  app.mount('#app');
});