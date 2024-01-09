<template>
  <ion-page>
    <IonHeader class="ion-no-border">
      <HeaderDashboard :titulo="'GENERALES'" :curp="'BEZI980617HDFCMS09'" :id-cliente="'879462'"
        :nombre-usuario="'ISAAC BECERRA ZAMORA'"></HeaderDashboard>
    </IonHeader>
    <ion-content >
      <!--<div class="fixed bg-fixed h-screen w-screen bg-cover bg-no-repeat opacity-10 bg-[url(/Fondo.jpg)] z-0"></div>-->
      <div class="fixed bg-fixed h-screen w-screen bg-cover bg-no-repeat bg-slate-50 z-0"></div>
      <div class="relative sm:mr-10 sm:ml-10 md:mr-40 md:ml-40 lg:mr-60 lg:ml-60 xl:mr-80 xl:ml-80 2xl:mr-96 2xl:ml-96">
        <div class="mt-5 mb-20">
          <!-- <div v-if="listaClientes.length === 0">
                    <MainEmpty :mensaje="'Sin contenido que mostrar'"></MainEmpty>
                  </div>
                  <div v-if="listaClientes.length > 0">
                    <div class="mt-20" v-if="listaClientes.length"> v-for="cliente in listaClientes" :key="cliente.tokenFormulario.toString()"-->
          <div v-if="datosMandar.length > 0">
            <div v-if="datosMandar.length">
              <div v-for="datos in datosMandar" :key="datos.idcredito"
                class="justify-content-center align-items-center">
                <CardGenerales :datos-cliente="datos">
                </CardGenerales>
              </div>
            </div>

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
import { ref } from 'vue'
import HeaderDashboard from '@/components/headers/HeaderDashboard.vue';
import CardGenerales from '@/components/cardgenerales/CardGenerales.vue'

const datosMandar = ref([{
  idcredito: "548152",
  tipo: "Personal",
  numero1: "$ 1,259.00",
  numero2: "$ 479.00",
  porcentaje: ".50",
  vencimiento: "03/05/24",
}, {
  idcredito: "846579",
  tipo: "Solidario",
  numero1: "$ 52,456.00",
  numero2: "$ 1,165.00",
  porcentaje: "1",
  vencimiento: "Inmediato",
},
{
  idcredito: "254863",
  tipo: "Nomina",
  numero1: "$ 100,456.00",
  numero2: "$ 4,165.00",
  porcentaje: ".71",
  vencimiento: "Inmediato",
},{
  idcredito: "548152",
  tipo: "Personal",
  numero1: "$ 1,259.00",
  numero2: "$ 479.00",
  porcentaje: ".50",
  vencimiento: "Inmediato",
}, {
  idcredito: "846579",
  tipo: "Solidario",
  numero1: "$ 52,456.00",
  numero2: "$ 1,165.00",
  porcentaje: "1",
  vencimiento: "Inmediato",
},
{
  idcredito: "254863",
  tipo: "Nomina",
  numero1: "$ 1,000,456.00",
  numero2: "$ 4,165.00",
  porcentaje: ".71",
  vencimiento: "Inmediato",
}]);
</script>
