<template>
    <ion-page>
        <ion-header class="border-b-white shadow-none">
            <HeaderDashboard :titulo="'NOTIFICACIONES'"></HeaderDashboard>
        </ion-header>
        <ion-content>
            <div class="fixed bg-fixed h-screen w-screen bg-cover bg-no-repeat opacity-10 bg-[url(/Fondo.jpg)] z-0"></div>
            <div
                class="relative sm:mr-10 sm:ml-10 md:mr-40 md:ml-40 lg:mr-60 lg:ml-60 xl:mr-80 xl:ml-80 2xl:mr-96 2xl:ml-96">
                <div class="">
                    <ion-segment value="selectedSegment" class="bg-gray-100" mode="md"><!--v-model="selectedSegment"-->
                        <ion-segment-button :style="{ width: segmentButtonWidth }" value="selectedSegment" @click="acciones">
                            <!--v-for="(campo, index) in archivoEnviarFormularios" :key="index" :value="campo"-->
                            <span class="font-semibold">DIARIOS</span>
                            <!-- <ion-icon class="h-10 w-10" :icon=""></ion-icon> -->
                        </ion-segment-button>

                        <ion-segment-button :style="{ width: segmentButtonWidth }" value="segmentDos" @click="acciones">
                            <!--v-for="(campo, index) in archivoEnviarFormularios" :key="index" :value="campo"-->
                            <span class="font-semibold">PERMANENTES</span>
                            <!-- <ion-icon class="h-10 w-10" :icon=""></ion-icon> -->
                        </ion-segment-button>
                    </ion-segment>
                </div>
            </div>
        </ion-content>
    </ion-page>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import {
    IonPage,
    IonContent,
    IonHeader,
    IonSegment,
    IonSegmentButton
} from '@ionic/vue';
import HeaderDashboard from '@/components/headers/HeaderDashboard.vue';

//const selectedSegment = ref();
const segmentButtonWidth = ref(''); 

const acciones = () => {

};

onMounted(() => {
  // Calcular y establecer el ancho de los botones del segmento
  const numberOfButtons = 2; // Cambia esto según la cantidad de botones que tengas
  segmentButtonWidth.value = `calc(100% / ${numberOfButtons})`;
});

</script>

<style scoped>
.segment-button {
  flex: 1;
  max-width: none !important;
}

.segment-container {
  display: flex;
}

ion-segment-button.md {
    --color: #02666a;
    --color-checked: #ed6c25;
    --indicator-height: 4px;
  }
</style>