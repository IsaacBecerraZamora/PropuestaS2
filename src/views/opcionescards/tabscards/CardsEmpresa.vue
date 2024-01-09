<template>
    <ion-page>
        <ion-header class="border-b-white shadow-none">
            <HeadersComun :titulo="'EMPRESA'" id-cliente=""></HeadersComun>
        </ion-header>
        <ion-content>
            <EmpresaInformacion :datos="informacionEmpresa"></EmpresaInformacion>
        </ion-content>
    </ion-page>
</template>
<script setup lang="ts">
import {
    IonPage,
    IonContent,
    IonHeader,
} from '@ionic/vue';
import { ref } from 'vue';
import HeadersComun from '@/components/headers/HeadersComun.vue';
import EmpresaInformacion from '@/components/generales/EmpresaInformacion.vue';


const informacionEmpresa = ref({
        sucursal: "Sucursal",
        dirección: "Dirección",
        colonia: "colonia",
        ciudad: "ciudad",
        estado: "estado",
        cp: "55120",
        teléfono: "",
        correo: "zamora.becerrsdfasd@@gmail.com",
});
</script>
    