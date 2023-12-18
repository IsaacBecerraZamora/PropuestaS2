<template>
    <ion-page>
        <ion-content> 
            <HeaderDashboard :titulo="'NOTIFICACIONES'"></HeaderDashboard>
            <div
                class="relative -mt-10 p-5 rounded-t-3xl bg-gray-100 h-screen sm:mr-10 sm:ml-10 md:mr-40 md:ml-40 lg:mr-60 lg:ml-60 xl:mr-80 xl:ml-80 2xl:mr-96 2xl:ml-96 bg-no-repeat pb-5 z-50 border border-gray-50 opacity-100 rounded-lg">
                <div class="fixed -ml-5 bg-fixed h-screen w-full bg-cover bg-no-repeat opacity-10 bg-[url(/Fondo.jpg)] z-0">
                </div>
            </div>
        </ion-content>
    </ion-page>
    </template>
    <script setup lang="ts">
    import {
        IonPage,
        IonContent,
    } from '@ionic/vue';
    import HeaderDashboard from '@/components/headers/HeaderDashboard.vue';
    </script>
    