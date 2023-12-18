<template>
    <nav
        class="relative bg-primary border-gray-200 sm:mr-10 sm:ml-10 md:mr-40 md:ml-40 lg:mr-60 lg:ml-60 xl:mr-80 xl:ml-80 2xl:mr-96 2xl:ml-96 border opacity-100 rounded-lg shadow-2xl">
        <div class="relative text-center justify-center mx-auto p-5 max-w-screen-xl ">
            <a class="grid grid-cols-3 items-center">
                <span class="flex col-span-2 mx-auto text-left ml-5 text-xl font-semibold text-white">{{ props.titulo
                }}</span>

                <span class="col-span-1 text-right">
                    <ion-icon class="relative w-7 h-7 mt-2 mr-3 text-white" :icon="notifications" @click="notificaciones()" />
                </span>
            </a>
        </div>
        <div v-if="props.titulo == 'GENERALES'"  class="shadow-2xl p-10 mt-2 mb-5 mr-5 ml-5">
           
        </div>

        <div class="mb-10"></div>
    </nav>
</template>
<script setup lang="ts"> 
import {
    IonIcon, useIonRouter,
} from '@ionic/vue';
import { notifications } from "ionicons/icons";

const ionRouter = useIonRouter();
const notificaciones = () => {
    ionRouter.replace('/notificaciones');
};

const props = defineProps({ titulo: String })

</script>