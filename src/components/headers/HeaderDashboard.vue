<template>
    <nav class="relative bg-primary border-none rounded-b-3xl shadow-2xl -mb-5">
      <div class="relative text-center justify-center mx-auto p-5 max-w-screen-xl">
        <a class="grid grid-cols-3 items-center">
          <span class="flex col-span-2 mx-auto text-left ml-5 text-xl font-semibold text-white">{{ props.titulo }}</span>
          <span class="col-span-1 text-right">
            <ion-icon class="relative w-7 h-7 mt-2 mr-3 text-white" :icon="notifications" @click="notificaciones()" />
          </span>
        </a>
      </div>
  
      <div v-if="props.titulo == 'GENERALES'" class="p-2 -mt-3">
        <div class="grid grid-cols-9 mb-5">
          <div class="col-span-3 flex items-center justify-center">
            <div class="h-auto w-auto">
              <ion-icon class="relative w-16 h-16 text-white" :icon="personCircle" />
            </div>
          </div>
          <div class="col-span-6">
            <div class="grid grid-rows-3 text-white">
              <div class="row-1 font-semibold">{{ props.nombreUsuario }}</div>
              <div class="row-1 flex">
                <p class="font-semibold">ID Cliente:</p><span class="ml-2">{{ props.idCliente }}</span>
              </div>
              <div class="row-1 flex">
                <p class="font-semibold">CURP:</p><span class="ml-2">{{ props.curp }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </template>
  
  <script setup lang="ts">
  import { IonIcon, useIonRouter } from '@ionic/vue';
  import { notifications, personCircle } from 'ionicons/icons';
  
  const ionRouter = useIonRouter();
  const notificaciones = () => {
    ionRouter.replace('/notificaciones');
  };
  
  const props = defineProps({
    titulo: String,
    nombreUsuario: String,
    idCliente: String,
    curp: String,
  });
  </script>