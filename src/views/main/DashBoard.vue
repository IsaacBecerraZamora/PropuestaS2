<template>
  <ion-page>
          <ion-tabs>
            <ion-router-outlet></ion-router-outlet>
              <ion-tab-bar slot="bottom">
                  <ion-tab-button tab="generales" class="bg-gray-200 hover:text-secondary" href="/generales">
                      <ion-icon class="w-7 h-7  hover:text-secondary " :icon="wallet" />
                      <!--<ion-label class="font-normal">Pendientes</ion-label>-->
                  </ion-tab-button>

                  <ion-tab-button tab="sucursales" class="comments bg-gray-200 border-r border-gray-200 hover:text-secondary" href="/sucursales">
                      <ion-icon class="w-7 h-7  hover:text-secondary " :icon="business" />
                      <!--<ion-label class="font-normal">Enviados</ion-label>-->
                  </ion-tab-button>

                  <svg mode="md" height="100" viewBox="0 0 100 48" width="99" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 0v50H0V0c.543 27.153 22.72 49 50 49S99.457 27.153 99.99 0h.01z" fill="light"
                          fill-rule="evenodd">
                      </path> <!--class="w-71 mt-1 fill-gray-200"-->
                  </svg>

                  <ion-tab-button tab="tickets" class="notifs bg-gray-200 border-l border-gray-200 hover:text-secondary" href="/tickets">
                      <ion-icon class="w-7 h-7 hover:text-secondary " :icon="chatbubbles" />
                      <!--<ion-label class="font-normal">Historico</ion-label>-->
                  </ion-tab-button>

                  <ion-tab-button tab="configuracion" class="bg-gray-200 hover:text-secondary" href="/configuraciones">
                      <ion-icon class="w-7 h-7 hover:text-secondary" :icon="cog" />
                      <!--  <ion-label class="font-normal">Opciones</ion-label>-->
                  </ion-tab-button>
              </ion-tab-bar>
              <ion-fab mode="md" style="bottom: 18px;" vertical="bottom" horizontal="center" translucent="true" >
                  <ion-fab-button href="/notificaciones"><!--@click="newFormulario()"-->
                    <ion-icon class="w-8 h-8 hover:text-secondary" :icon="fileTrayFull"/>
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
  IonIcon,
} from '@ionic/vue';
import { cog, business, wallet, chatbubbles , notifications, fileTrayFull } from "ionicons/icons"; //musicalNotes
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

/*
.responsive-svg {
  width: auto; /* Haz que el ancho del SVG sea el 100% del contenedor 
  height: auto; /* Permite que la altura se ajuste automáticamente en proporción al ancho 
  margin-top: 5px;
  fill: #e5e7eb;
}
*/
</style>
