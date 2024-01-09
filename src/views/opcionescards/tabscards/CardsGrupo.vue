<template>
    <ion-page>
      <IonHeader class="ion-no-border">
        <HeadersComun :titulo="'GRUPO'" id-cliente=""></HeadersComun>
      </IonHeader>
      <ion-content>
        <div class="fixed bg-fixed h-screen w-screen bg-cover bg-no-repeat opacity-10 bg-[url(/Fondo.jpg)] z-0"></div>
        <MainEmpty :mensaje="'SIN INFORMACIÓN PARA MOSTRAR'"></MainEmpty>
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
  import MainEmpty from '@/components/generales/MainEmpty.vue';
  
  </script>
    