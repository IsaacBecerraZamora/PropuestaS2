<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom" class="h-16">
        <ion-tab-button tab="pagos" class="bg-gray-200 hover:text-secondary" href="/pagar">
          <div class="grid grid-rows-2 fixed mt-4">
            <div class="row">
              <font-awesome-icon icon="fa-solid fa-circle-dollar-to-slot" class="w-5 h-5 hover:text-secondary" />
            </div>
            <div class="row -mt-1">
              <ion-label class="font-normal">Pagar</ion-label>
            </div>
          </div>
        </ion-tab-button>

        <ion-tab-button tab="sucursales" class="comments bg-gray-200 border-r border-gray-200 hover:text-secondary"
          href="/sucursales">
          <div class="grid grid-rows-2 fixed mt-4">
            <div class="row">
              <font-awesome-icon icon="fa-solid fa-building" class="w-5 h-5 hover:text-secondary" />
            </div>
            <div class="row -mt-1">
              <ion-label class="font-normal">Sucursal</ion-label>
            </div>
          </div>
        </ion-tab-button>
        <div class="mt-2">
        <svg mode="md" height="100" viewBox="0 0 100 48" width="99" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 0v50H0V0c.543 27.153 22.72 49 50 49S99.457 27.153 99.99 0h.01z" fill="light" fill-rule="evenodd"></path>
        </svg>
      </div>

        <ion-tab-button tab="notificaciones" class="notifs bg-gray-200 border-l border-gray-200 hover:text-secondary"
          href="/notificaciones">
          <div class="grid grid-rows-2 fixed mt-4">
            <div class="row">
              <font-awesome-icon icon="fa-solid fa-bell" class="w-5 h-5 hover:text-secondary" />
            </div>
            <div class="row -mt-1">
              <ion-label class="font-normal">Notificación</ion-label>
            </div>
          </div>
        </ion-tab-button>

        <ion-tab-button tab="configuracion" class="bg-gray-200 hover:text-secondary" href="/configuraciones">
          <div class="grid grid-rows-2 fixed mt-4">
            <div class="row">
              <font-awesome-icon icon="fa-solid fa-screwdriver-wrench" class="w-5 h-5 hover:text-secondary" />
            </div>
            <div class="row -mt-1">
              <ion-label class="font-normal">Configuración</ion-label>
            </div>
          </div>
        </ion-tab-button>

      </ion-tab-bar>
      <ion-fab mode="md" style="bottom: 18px;" vertical="bottom" horizontal="center" translucent="true">
        <ion-fab-button href="/generales" color="secondary">
          <font-awesome-icon icon="fa-solid fa-book" class="fixed mb-5 w-6 h-6 hover:text-primary" />
        </ion-fab-button>
      </ion-fab>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonFab,
  IonFabButton,
  IonLabel,
} from '@ionic/vue';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/keyboard';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/zoom';
import '@ionic/vue/css/ionic-swiper.css';


</script>

<style scoped>
ion-tab-bar {
  --border: 0;
  --background: transparent;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
}

&:after {
  content: " ";
  width: 100%;
  bottom: 0;
  position: absolute;
}

ion-tab-button.comments {
  margin-right: 0px;
  border-top-right-radius: 18px;
}

ion-tab-button.notifs {
  margin-left: 0px;
  border-top-left-radius: 18px;
}

svg {
  width: 72px;
  margin-top: 19px;
  fill: #e5e7eb;
}

.flipped {
  transform: rotateY(180deg);
}

.tab-selected {
  color: #ed6c25;
}
</style>
