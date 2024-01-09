<template>
    <ion-page>
      <IonHeader class="ion-no-border">
        <HeadersComun :titulo="'PAGOS'" id-cliente=""></HeadersComun>
      </IonHeader>
      <ion-content>
        <!--<MainEmpty :mensaje="'SIN INFORMACIÓN PARA MOSTRAR'"></MainEmpty>-->
        <div
        class="relative sm:mr-10 sm:ml-10 md:mr-40 md:ml-40 lg:mr-60 lg:ml-60 xl:mr-80 xl:ml-80 2xl:mr-96 2xl:ml-96">
            <div class="mt-5">       
              <!--AQUI-->
            
            </div>
        </div>
      </ion-content>
    </ion-page>
  </template>
  <script setup lang="ts">
  import {
    IonPage,
    IonContent,
    IonHeader,
  } from '@ionic/vue';
  // import { ref } from 'vue'
  import HeadersComun from '@/components/headers/HeadersComun.vue';
  //import MainEmpty from '@/components/generales/MainEmpty.vue';

  
  </script>
    