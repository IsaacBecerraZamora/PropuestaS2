<template>
  <ion-page>
    <IonHeader class="ion-no-border">
      <HeadersComun :titulo="'LEVANTAR TICKET'" :curp="'BEZI980617HDFCMS09'" :id-cliente="'879462'"
        :nombre-usuario="'ISAAC BECERRA ZAMORA'"></HeadersComun>
    </IonHeader>
    <ion-content>
      <div class="fixed bg-fixed h-screen w-screen bg-cover bg-no-repeat opacity-10 bg-[url(/Fondo.jpg)] z-0"></div>
      <div class="sm:mr-10 sm:ml-10 md:mr-40 md:ml-40 lg:mr-60 lg:ml-60 xl:mr-80 xl:ml-80 2xl:mr-96 2xl:ml-96">
          <div class="relative mt-5 mr-5 ml-5 mb-2">
            <span class="ml-3">Categoría:</span>
            <ion-list class="relative rounded-xl">
              <ion-item class="rounded-lg border-b-stone-500 hover:border-b-primary border-2">
                <ion-select aria-label="categoriaticket" placeholder="Categoría Ticket" justify="space-between">
                  <ion-select-option value="generales">Generales</ion-select-option>
                  <ion-select-option value="pago_incompleto">Pago Incompleto</ion-select-option>
                  <ion-select-option value="pago_no_registrado">Pago no Registrado</ion-select-option>
                  <ion-select-option value="problemas_de_pago">Problemas de Pago</ion-select-option>
                  <ion-select-option value="renovacion">Renovación</ion-select-option>
                  <ion-select-option value="solicitud">Solicitud</ion-select-option>
                  <ion-select-option value="solicitud_de_referencias">Solicitud de Referencias</ion-select-option>
                </ion-select>
              </ion-item>
            </ion-list>
          </div>
          <div
            class="relative bg-slate-50 border-zinc-400 hover:border-primary border-2 shadow-lg rounded-md mr-5 ml-5 p-3">
            <ion-textarea label="MOTIVO" label-placement="floating" :counter="true" :maxlength="100"></ion-textarea>
          </div>
          <div
            class="relative bg-slate-50 border-zinc-400 hover:border-primary border-2 shadow-lg rounded-md mr-5 ml-5 mt-2 p-5">
            <ion-textarea class="h-52 mb-5" label="DESCRIPCIÓN" label-placement="floating" :counter="true"
              :maxlength="500"></ion-textarea>
          </div>
          <div class="relative mr-5 ml-5 mt-2">
            <span class="ml-3">ID Credito:</span>
            <ion-list class="relative rounded-xl">
              <ion-item class="rounded-lg border-b-stone-500 hover:border-b-primary border-2">
                <ion-select aria-label="idcredito" placeholder="Id Crédito" justify="space-between">
                  <ion-select-option value="prueba">Prueba</ion-select-option>
                </ion-select>
              </ion-item>
            </ion-list>
          </div>
        </div>
    </ion-content>
    <ion-footer>
      <div class="grid grid-cols-2">
          <div class="col-1 btn p-5 bg-danger text-white font-semibold text-lg text-center">
            <button>CANCELAR</button>
          </div>
          <div class="col-1 btn p-5 bg-primary text-white font-semibold text-lg text-center">
            <button>GENERAR TICKET</button>
          </div>
      </div>
    </ion-footer>
  </ion-page>
</template>
<script setup lang="ts">
import {
  IonPage,
  IonContent,
  IonHeader,
  IonTextarea,
  IonList,
  IonItem,
  IonSelect,
  IonSelectOption,
  IonFooter,
} from '@ionic/vue';
// import { ref } from 'vue'
import HeadersComun from '@/components/headers/HeadersComun.vue';

const customFormatter = (inputLength: number, maxLength: number): string => {
  return `${maxLength - inputLength} characters remaining`;
};

</script>
  