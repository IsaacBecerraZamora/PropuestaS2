<template>
    <ion-page>
        <ion-header class="border-b-white shadow-none">
            <HeaderDashboard :titulo="'PAGAR'"></HeaderDashboard>
        </ion-header>
        <ion-content>
            <MainEmpty :mensaje="'SIN INFORMACIÓN PARA MOSTRAR'"></MainEmpty>
            <div class="fixed bg-fixed h-screen w-screen bg-cover bg-no-repeat bg-slate-50 z-0"></div>
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
        useIonRouter,
    } from '@ionic/vue';
    import HeaderDashboard from '@/components/headers/HeaderDashboard.vue';
    import MainEmpty from '@/components/generales/MainEmpty.vue';
    import { ref } from 'vue';

const router = useIonRouter();


    </script>
    