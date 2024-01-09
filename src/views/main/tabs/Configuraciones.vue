<template>
    <ion-page>
        <ion-header cclass="ion-no-border">
            <HeaderDashboard :titulo="'CONFIGURACIONES'" :curp="'BEZI980617HDFCMS09'" :id-cliente="'879462'"
                :nombre-usuario="'ISAAC BECERRA ZAMORA'"></HeaderDashboard>
        </ion-header>
        <ion-content>
            <div class="fixed bg-fixed h-screen w-screen bg-cover bg-no-repeat bg-slate-50 z-0"></div>
            <div
                class="relative mb-20 sm:mr-10 sm:ml-10 md:mr-40 md:ml-40 lg:mr-60 lg:ml-60 xl:mr-80 xl:ml-80 2xl:mr-96 2xl:ml-96">
                <div class="relative p-5">
                    <!-- <div class="relative bg-slate-100 shadow-md rounded-md mr-5 ml-5 mt-14">
                        <div class="text-center">
                            <label class="relative mt-5 inline-flex items-center mb-4 cursor-pointer">
                                <input type="checkbox" value="" class="sr-only peer" :checked="mantenerSesion" @click="" />
                                <span class="mr-2 text-sm font-semibold text-gray-900">Mantener Sesión</span>
                                <div
                                    class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-2 peer-focus:ring-green-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:right-[22px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary">
                                </div>
                            </label>
                        </div>
                    </div> -->
                    <div class="mt-14">
                        <div class="m-5">
                            <button
                                class="btn pb-4 pt-4 rounded-md bg-primary hover:bg-green-950 border-primary focus:ring-green-600"
                                @click="abrirModalBoton('CAMBIARCONTRASEÑA')">Cambiar Contraseña</button>
                        </div>
                        <div class="m-5">
                            <button
                                class="btn pb-4 pt-4 rounded-md bg-primary hover:bg-green-950 border-primary focus:ring-green-600"
                                @click="abrirModalBoton('TERMINOS')">Terminos y Condiciones</button>
                        </div>
                        <div class="m-5">
                            <button
                                class="btn pb-4 pt-4 rounded-md bg-primary hover:bg-green-950 border-primary focus:ring-green-600"
                                @click="abrirModalBoton('POLITICAS')">Politicas de Privacidad</button>
                        </div>
                        <div class="m-5">
                            <button
                                class="btn pb-4 pt-4 rounded-md bg-red-600 hover:bg-red-500 border-red-500 focus:ring-red-400"
                                @click="abrirModalBoton('CERRARSESION')">Cerrar
                                Sesión</button>
                        </div>
                    </div>
                    <div class="text-center ml-1 mr-1">
                        <p class="font-semibold">Dudas? Escribenos a contacto@relampago.com.mx</p>
                    </div>
                </div>
            </div>
            <Modal v-if="variableAbrirModal == true" :warning="warning" :texto="texto" :titulo="titulo"
                :abrir-modal="variableAbrirModal" @cerrar-modal="cerrarModal"></Modal>
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
import { ref } from "vue";
import Modal from "@/components/generales/Modal.vue"
import Helpers from '@/config/Helpers';

const mantenerSesion = ref();
const variableAbrirModal = ref(false);
const texto = ref("");
const titulo = ref("");
const warning = ref(false);

const abrirModalBoton = (tipo: String) => {
    if (tipo == 'CAMBIARCONTRASEÑA') {
        Helpers.toastMessage('Cambiar contraseña', 'alert')
    };
    if (tipo == 'TERMINOS') {
        titulo.value = 'Prueba';
        texto.value = 'Terminos y condiciones';
        variableAbrirModal.value = true;
        warning.value = true;
    };
    if (tipo == 'POLITICAS') {
        titulo.value = 'Prueba';
        texto.value = 'Politicas de Privacidad';
        variableAbrirModal.value = true;
    };
    if (tipo == 'CERRARSESION') {
        Helpers.toastMessage('Cerrar Sesion', 'alert')
    };
};
const cerrarModal = (dato: any) => {
    if (dato == true) {
        variableAbrirModal.value = false
        warning.value = false;
    }
};
</script>
    