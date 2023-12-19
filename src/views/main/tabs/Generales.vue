<template>
    <ion-page>
        <ion-header class="border-b-white shadow-none">
            <HeaderDashboard :titulo="'GENERALES'" :curp="'BEZI980617HDFCMS09'" :id-cliente="'879462'"
                :nombre-usuario="'ISAAC BECERRA ZAMORA'"></HeaderDashboard>
        </ion-header>
        <ion-content>
            <div class="fixed bg-fixed h-screen w-screen bg-cover bg-no-repeat opacity-10 bg-[url(/Fondo.jpg)] z-0"></div>
            <div
                class="sm:mr-10 sm:ml-10 md:mr-40 md:ml-40 lg:mr-60 lg:ml-60 xl:mr-80 xl:ml-80 2xl:mr-96 2xl:ml-96">
                <div class="mt-5">
                   <span>GENERALES</span> 
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
import HeaderDashboard from '@/components/headers/HeaderDashboard.vue';

</script>
