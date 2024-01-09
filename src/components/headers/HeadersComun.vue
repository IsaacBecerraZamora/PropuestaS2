<template>
    <nav
        class="relative bg-primary sm:mr-10 sm:ml-10 md:mr-40 md:ml-40 lg:mr-60 lg:ml-60 xl:mr-80 xl:ml-80 2xl:mr-96 2xl:ml-96 opacity-100 shadow-2xl">
        <div :class="optionClass">
            <a class="grid grid-cols-12 items-center">
                <span class="col-span-1 text-left">
                    <font-awesome-icon icon="fa-solid fa-arrow-left" @click="retroceder"
                        class="relative w-7 h-7 pt-1 pb-1 ml-2 text-white" />
                </span>
                <span class="flex col-span-11 mx-auto text-left ml-8 text-xl font-semibold text-white">{{
                    props.titulo }}</span>
            </a>
        </div>
        <div v-if="props.idCliente != ''">
            <div class="p-2 -mt-1">
                <div class="grid grid-cols-9 mb-5">
                    <div class="col-span-3 flex items-center justify-center">
                        <div class="h-auto w-auto">
                            <font-awesome-icon icon="fa-solid fa-circle-user" class="relative w-16 h-16 text-white" />
                        </div>
                    </div>
                    <div class="col-span-6">
                        <div class="grid grid-rows-3 text-white">
                            <div class="row-1 font-semibold">{{ props.nombreUsuario }}</div>
                            <div class="row-1 flex">
                                <p class="font-semibold">ID Cliente:</p><span class="ml-2">{{ props.idCliente }}</span>
                            </div>
                            <div class="row-1 flex">
                                <p class="font-semibold">CURP:</p><span class="ml-2">{{ props.curp }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="props.titulo == 'SALDOS'" class="bg-tertiary mb-20">
            <transition>
                <div v-if="props.ocultarEncabezado == false" class="p-2 text-center pb-8">
                    <div class="mt-2">
                        <div>
                            <p class="text-white font-semibold">Monto Otorgado</p>
                            <p class="text-white font-semibold text-xl">$ {{ props.montoOtorgado }}</p>
                        </div>
                        <div class="grid grid-cols-3 ml-7 mr-7 mt-3 mb-4">
                            <div class="col">
                                <p class="text-white font-semibold">Para Liquidar</p>
                                <p class="text-white font-semibold text-xl">{{ props.paraLiquidar }}</p>
                            </div>
                            <div class="col">
                                <p class="text-white text-5xl">|</p>
                            </div>
                            <div class="col">
                                <p class="text-white font-semibold">Cuota</p>
                                <p class="text-white font-semibold text-xl">{{ props.cuota }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>

            <div v-if="props.ocultarEncabezado == true" class="flex bg-cover bg-no-repeat text-center bg-tertiary mt-8">
            </div>
            <div class="absolute justify-items-center mx-auto w-full">
                <div class="bg-white rounded-3xl shadow-2xl">
                    <div class="grid grid-cols-9">
                        <div class="col-span-1 text-left">
                            <div
                                class="absolute shadow-2xl w-20 h-12 bg-warning rounded-r-full z-50 -mt-7 flex items-center justify-center">
                                <font-awesome-icon icon="fa-solid fa-circle-exclamation"
                                    class="fixed w-7 h-7 -mr-4 text-white" />
                            </div>
                        </div>
                        <div class="col-span-7 text-center">
                            <div class="text-center text-2xl mt-2 font-semibold relative">
                                <div class="w-48 h-24 bg-white rounded-t-full -mt-10 mx-auto p-2 z-0">
                                    <p class="mt-6">{{ props.tipo }}</p>
                                </div>
                                <div class="mb-5 -mt-5">
                                    <ion-progress-bar :value="Number(props.porcentaje)" :buffer="100" :color="'secondary'"
                                        class="h-7 rounded-md bg-stone-300">
                                    </ion-progress-bar>
                                    <p class="relative -mt-7 mr-2 text-white font-normal text-lg text-center z-50"><span
                                            class="mr-1">{{
                                                porcentajeNumero }}</span>%</p>
                                </div>
                            </div>
                            <div class="relative mb-2 -mt-3">
                                <div>
                                    <p class="text-primary font-semibold mt-2">Próximo Vencimiento</p>
                                </div>
                                <div>
                                    <span v-if="props.vencimiento == 'Inmediato'" class="font-semibold text-danger">{{
                                        props.vencimiento }}</span>
                                    <span v-else class="font-semibold">{{ props.vencimiento }}</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-1 relative">
                            <div
                                class="absolute shadow-2xl right-0 w-20 h-12 bg-secondary rounded-l-full -mt-7 flex justify-center items-center">
                                <font-awesome-icon icon="fa-solid fa-chart-column" v-if="iconoGraficaInformacion == false"
                                    @click="cambiarIcono" class="w-7 h-7 -ml-4 text-white" />
                                <font-awesome-icon icon="fa-solid fa-scroll" v-else @click="cambiarIcono"
                                    class="w-7 h-7 -ml-4 text-white " />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>
  
<script setup lang="ts">
import { useIonRouter, IonProgressBar } from '@ionic/vue';
import { onMounted, ref, onUpdated } from 'vue';

const optionClass = ref();
const porcentajeNumero = ref();
const iconoGraficaInformacion = ref(false);


onMounted(() => {
    if (props.porcentaje == '1') {
        porcentajeNumero.value = '100';
    } else {
        porcentajeNumero.value = quitarPuntos(String(props.porcentaje));
    }



    optionClass.value = props.idCliente != '' ? 'relative text-center justify-center mx-auto p-2 max-w-screen-xl' : 'relative text-center justify-center p-2 max-w-screen-xl shadow-xl';
});

onUpdated(() => {
    if (props.porcentaje == '1') {
        porcentajeNumero.value = '100';
    } else {
        porcentajeNumero.value = quitarPuntos(String(props.porcentaje));
    };
});

function quitarPuntos(cadena: string) {
    return cadena.replace(/\./g, '');
}

const ionRouter = useIonRouter();


const props = defineProps({
    titulo: String,
    nombreUsuario: String,
    idCliente: String,
    curp: String,
    vencimiento: String,
    porcentaje: String,
    montoOtorgado: String,
    cuota: String,
    paraLiquidar: String,
    tipo: String,
    ocultarEncabezado: Boolean,
});

const emit = defineEmits(['cambiarInformacion']);

const cambiarIcono = () => {
    iconoGraficaInformacion.value = !iconoGraficaInformacion.value;
    emit('cambiarInformacion', iconoGraficaInformacion.value);

};

const retroceder = () => {
    if (props.titulo == 'LEVANTAR TICKET') {
        ionRouter.replace('/tickets');
    } else {
        ionRouter.replace('/dashboard');
    }
};
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>