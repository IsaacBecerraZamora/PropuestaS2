<template>
    <ion-page>
        <ion-header class="border-b-white shadow-none">
            <HeaderDashboard :titulo="'TICKETS'"></HeaderDashboard>
        </ion-header>
        <ion-content>
            <div class="fixed bg-fixed h-screen w-screen bg-cover bg-no-repeat opacity-10 bg-[url(/Fondo.jpg)] z-0"></div>
            <MainEmpty :mensaje="'SIN INFORMACIÓN PARA MOSTRAR'"></MainEmpty>
            <div
            class="relative sm:mr-10 sm:ml-10 md:mr-40 md:ml-40 lg:mr-60 lg:ml-60 xl:mr-80 xl:ml-80 2xl:mr-96 2xl:ml-96">
                <div class="mt-5">       
                  <!--AQUI-->
                   <div class="fixed right-3 bottom-20 group z-20">
                    <ion-fab-button><!--@click-->
                      <PlusIcon class="justify-center w-7 h-7" />
                    </ion-fab-button>
                  </div>
                </div>
            </div>
        </ion-content>
    </ion-page>
    </template>
    <script setup lang="ts">
    import {
        IonPage,
        IonContent,
        IonHeader
    } from '@ionic/vue';
    import { PlusIcon } from "@heroicons/vue/24/outline";
    import HeaderDashboard from '@/components/headers/HeaderDashboard.vue';
    import MainEmpty from '@/components/generales/MainEmpty.vue';
    </script>
    