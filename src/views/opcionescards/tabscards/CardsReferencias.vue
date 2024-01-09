<template>
    <ion-page>
      <IonHeader class="ion-no-border">
        <HeadersComun :titulo="'REFERENCIAS'" id-cliente=""></HeadersComun>
      </IonHeader>
      <ion-content>
        <div class="mt-5 sm:mr-10 sm:ml-10 md:mr-40 md:ml-40 lg:mr-60 lg:ml-60 xl:mr-80 xl:ml-80 2xl:mr-96 2xl:ml-96">   
        <Referencias :referencia-resultado="referencia" :convenio-resultado="convenio" id="open-modal" expand="block"></Referencias>
        <ion-modal trigger="open-modal" :initial-breakpoint=".60" :breakpoints="[0, .60]">
          <div class="text-center">Block of Content</div>
        </ion-modal>
      </div>
      </ion-content>
    </ion-page>
  </template>
  <script setup lang="ts">
  import {
    IonPage,
    IonContent,
    IonHeader,
    IonModal
  } from '@ionic/vue';
  import HeadersComun from '@/components/headers/HeadersComun.vue';
  import Referencias from '@/components/generales/Referencias.vue';
import { ref } from 'vue';
  const referencia = ref("651651651981");
  const convenio = ref("12535");
  

  </script>
    