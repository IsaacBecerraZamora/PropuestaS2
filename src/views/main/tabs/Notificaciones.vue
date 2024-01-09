<template>
  <ion-page>
    <ion-header class="border-b-white shadow-none">
      <HeaderDashboard :titulo="'NOTIFICACIONES'"></HeaderDashboard>
    </ion-header>
    <ion-content>
      <div class="fixed bg-fixed h-screen w-screen bg-cover bg-no-repeat bg-slate-50 z-0"></div>
      <div class="sm:mr-10 sm:ml-10 md:mr-40 md:ml-40 lg:mr-60 lg:ml-60 xl:mr-80 xl:ml-80 2xl:mr-96 2xl:ml-96">
        <div class="">
            <NotificacionesComponente></NotificacionesComponente>
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
} from '@ionic/vue';
import HeaderDashboard from '@/components/headers/HeaderDashboard.vue';
import NotificacionesComponente from '@/components/notificaciones/NotificacionesComponente.vue';

const selectedSegment = ref();
const segmentButtonWidth = ref('');

const mostrarDiarios = ref(true);
const mostrarPermanentes = ref(false);

const acciones = () => {

  if (selectedSegment.value == 'diario') {
    mostrarDiarios.value = true;
    mostrarPermanentes.value = false;
  };
  if (selectedSegment.value == 'permanentes') {
    mostrarDiarios.value = false;
    mostrarPermanentes.value = true;
  };
};

onMounted(() => {
  // Calcular y establecer el ancho de los botones del segmento
  const numberOfButtons = 2; // Cambia esto según la cantidad de botones que tengas
  segmentButtonWidth.value = `calc(100% / ${numberOfButtons})`;
  acciones();
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