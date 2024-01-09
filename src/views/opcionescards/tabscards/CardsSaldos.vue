<template>
  <ion-page>
    <IonHeader class="ion-no-border">
      <HeadersComun :titulo="'SALDOS'" id-cliente="" :cuota="cuota" :monto-otorgado="montoOtorgado"
        :vencimiento="vencimiento" :tipo="tipo" :porcentaje="porcentaje" :para-liquidar="paraLiquidar"
        @cambiar-informacion="cambiarInformacion" :ocultar-encabezado="ocultarEncabezado" @click="mostrarInfo()"></HeadersComun>
    </IonHeader>
    <ion-content :scroll-events="true" @ionScroll="handleScroll($event)">

      <div v-if="cambioVista == false" class="mt-14">
        <div>
          <tablas :titulo="'Saldos'" :subtitulo1="'subtitulo1'" :subtitulo2="'subtitulo2'" :subtitulo3="'subtitulo3'"
            :subtitulo4="'subtitulo4'" :resultado1="'resultado1'" :resultado2="'resultado2'" :resultado3="'resultado3'"
            :resultado4="'resultado4'"></tablas>
        </div>
        <div>
          <tablas :titulo="'Titulo2'" :subtitulo1="'subtitulo1'" :subtitulo2="'subtitulo2'" :subtitulo3="'subtitulo3'"
            :subtitulo4="'subtitulo4'" :resultado1="'resultado1'" :resultado2="'resultado2'" :resultado3="'resultado3'"
            :resultado4="'resultado4'"></tablas>
        </div>
        <div>
          <tablas :titulo="'Titulo3'" :subtitulo1="'subtitulo1'" :subtitulo2="'subtitulo2'" :subtitulo3="'subtitulo3'"
            :subtitulo4="'subtitulo4'" :resultado1="'resultado1'" :resultado2="'resultado2'" :resultado3="'resultado3'"
            :resultado4="'resultado4'"></tablas>
        </div>
      </div>
      <div v-if="cambioVista == true" class="mt-7">
        <Graficas></Graficas>
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
import { ref, onMounted, onUpdated } from 'vue'
import HeadersComun from '@/components/headers/HeadersComun.vue';
import storage from '@/storage';
import tablas from '@/components/generales/tablas.vue';
import Graficas from '@/components/generales/Graficas.vue';
import initDatosCardGenerales from '@/interfaces/DatosCardGenerales';
//import Helpers from '@/config/Helpers';

const montoOtorgado = ref("");
const cuota = ref("");
const paraLiquidar = ref("");
const vencimiento = ref("");
const porcentaje = ref("");
const tipo = ref("");
const cambioVista = ref(false)
const ocultarEncabezado = ref(false);

const datosTabsFinal = ref();

onMounted(async () => {
  const storedDatosTabs = await storage.get("informacionCard");
  const datosTabs = JSON.parse(storedDatosTabs) || {};
  datosTabsFinal.value = initDatosCardGenerales(datosTabs);

  montoOtorgado.value = "15,000.00";
  cuota.value = datosTabsFinal.value.numero2;
  paraLiquidar.value = datosTabsFinal.value.numero1;
  vencimiento.value = datosTabsFinal.value.vencimiento;
  porcentaje.value = datosTabsFinal.value.porcentaje;
  tipo.value = datosTabsFinal.value.tipo;
});

onUpdated(() => {
  ocultarEncabezado.value = false;
});

const cambiarInformacion = (dato: boolean) => {
  console.log(dato);
  cambioVista.value = dato;
};


const handleScroll = (event: any) => {
    if (event.detail.scrollTop != 0) {
      ocultarEncabezado.value = true;
    } /*if (event.detail.scrollTop == 0) {
      ocultarEncabezado.value = false;
    };*/
};

const mostrarInfo = () => {
  ocultarEncabezado.value = false;
};



</script>
    