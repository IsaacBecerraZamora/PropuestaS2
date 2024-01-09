<template>
    <ion-page>
      <ion-content>
       <!-- <div class="absolute h-screen w-screen bg-cover bg-no-repeat opacity-20 animate-pulse animate-once text-center bg-[url('/Fondo.jpg')]  z-0">
        </div>-->
       <!-- <div class="absolute h-screen w-screen bg-cover bg-no-repeat opacity-70 animate-shake animate-infinite animate-duration-[9911ms] text-center bg-[url('/Fondo2.jpg')]  z-0">
        </div>-->
        <div class="absolute h-screen w-screen flex items-center justify-center bg-cover bg-no-repeat opacity-70 animate-pulse animate-once" style="background-image: url('/Fondo3.jpg'); z-index: 0;">
        </div>

        <div class="absolute h-screen w-screen bg-cover bg-no-repeat text-center bg-gradient-to-b from-[#000000] via-[#ffffff] to-[#000000] opacity-20 z-20">
        </div>
        <div class="absolute top-5 mt-5 mb-10">
          <img src="/relampago2.png" alt="s2red-usuarios" class="w-[80%] lg:w-[30%] xl:w-[20%] mx-auto relative" />
        </div>
        <div class="absolute shadow-2xl bottom-0 z-50 from-primary-shade to-white">
          <div class="text-center">
            <ion-spinner name="crescent" class="text-sky-800 w-14 h-14"></ion-spinner>
          </div>
          <img src="/s2credit.png" class="w-[40%] my-5 mx-auto bg-cover p-3" />
          <div class="text-center justify-center pl-24 pr-24 pb-14">
            <p class="text-gray-800 text-xs font-bold opacity-60">RED DE SERVICIOS FINANCIEROS, S.A. DE C.V. SOFOM ENR</p>
          </div>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup lang="ts">
  import { onMounted } from "vue";
  import { IonPage, IonContent, IonSpinner, useIonRouter} from "@ionic/vue";
  import Helpers from '@/config/Helpers';

  //import { Device } from '@capacitor/device';
  //import PermisosUsuarios from '@/firebase/PermisosUsuarios';
  
  const ionRouter = useIonRouter();
  
  onMounted(async () => {
    await Helpers.delay(3000);
    ionRouter.replace('/autoregistro');
  });
  
  </script>
  
  