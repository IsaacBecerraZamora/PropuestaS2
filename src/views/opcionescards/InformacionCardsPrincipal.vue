<template>
    <ion-page>
            <ion-tabs>
              <ion-router-outlet></ion-router-outlet>
                <ion-tab-bar slot="bottom" class="h-16 bg-gray-200 shadow-2xl border-t-4 border-gray-300">
                    <ion-tab-button tab="saldos" class="bg-gray-200 mt-1 hover:text-secondary" href="/saldos">
                      <font-awesome-icon icon="fa-solid fa-chart-simple" 
                      class="w-7 h-7  hover:text-secondary " />
                      <ion-label class="font-normal">Saldos</ion-label>
                    </ion-tab-button>
  
                    <ion-tab-button tab="pagos" class="bg-gray-200 mt-1 border-r border-gray-200 hover:text-secondary" href="/pagos">
                        <font-awesome-icon icon="fa-solid fa-wallet" 
                      class="w-7 h-7  hover:text-secondary " />
                      <ion-label class="font-normal">Pagos</ion-label>
                    </ion-tab-button>
  
                    <ion-tab-button tab="referencias" class="bg-gray-200 mt-1 border-l border-gray-200 hover:text-secondary" href="/referencias">
                        <font-awesome-icon icon="fa-solid fa-money-bill" 
                        class="w-8 h-8  hover:text-secondary " />
                        <ion-label class="font-normal">Referencias</ion-label>
                    </ion-tab-button>
  
                    <ion-tab-button v-if="datosTabsFinal?.tipo === 'Nomina'" tab="empresa" class="bg-gray-200 mt-1 hover:text-secondary" href="/empresa">
                      <font-awesome-icon icon="fa-solid fa-building" 
                      class="w-7 h-7  hover:text-secondary " /> 
                      <ion-label class="font-normal">Empresa</ion-label> 
                    </ion-tab-button>

                    <ion-tab-button v-if="datosTabsFinal?.tipo === 'Solidario'" tab="grupo" class="bg-gray-200 mt-1 hover:text-secondary" href="/grupo">
                      <font-awesome-icon icon="fa-solid fa-users" 
                        class="w-7 h-7  hover:text-secondary " />
                        <ion-label class="font-normal">Grupo</ion-label>
                  </ion-tab-button>
                </ion-tab-bar>
            </ion-tabs>
    </ion-page>
  </template>
  
  <script setup lang="ts">
  import initDatosCardGenerales from '@/interfaces/DatosCardGenerales';
import storage from '@/storage';
import {
    IonPage,
    IonTabs,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonLabel,
  } from '@ionic/vue';
  import { business, wallet, cash, statsChart, people } from "ionicons/icons"; //musicalNotes
  import { onMounted, ref } from 'vue';
  
  const datosTabsFinal = ref();
  
  onMounted(async () => {
    const storedDatosTabs = await storage.get("informacionCard");
   const datosTabs = JSON.parse(storedDatosTabs) || {};
   datosTabsFinal.value = initDatosCardGenerales(datosTabs);
  });
  </script>
  
  <style scoped>
  

  
  .tab-selected {
    color: #ed6c25;
  }
  
  </style>
  