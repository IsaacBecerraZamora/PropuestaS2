<template>
    <ion-list mode="md" class="shadow-xl rounded-md border-t-8 mr-5 mb-3 ml-5" :class="colorCardBorder">
        <!-- <ion-item-sliding>-->
        <ion-item @click="openMenu" class="sin-linea" lines="none">
            <div class="w-full mx-auto">
                <table class="w-full mx-auto mb-2 mt-2 font-semibold">
                    <tbody>
                        <tr class="text-sm">
                            <td><span class="ml-2">Crédito:</span><span class="ml-1">{{ props.datosCliente?.idcredito
                            }}</span></td>
                            <td class="text-right"><span class="mr-2">{{ props.datosCliente?.tipo }}</span></td>
                        </tr>
                        <tr>
                            <td class="text-2xl"><span class="ml-2">{{ props.datosCliente?.numero1 }}</span></td>
                            <td class="text-right text-lg"><span class="mr-2">{{ props.datosCliente?.numero2 }}</span></td>

                        </tr>
                    </tbody>
                </table>
                <ion-progress-bar :value="datoCampo" :buffer="100" :color="colorCardProgress"
                    class="h-6 rounded-md bg-stone-300 mt-1">
                </ion-progress-bar>
                <p class="relative -mt-6 mr-2 text-white font-normal text-center z-50"><span class="mr-1">{{
                    datoProgress }}</span>%</p>

                <p class="font-semibold text-xs mt-2"><span class="ml-1">Próximo Vencimiento:</span><span class="ml-1">{{
                    props.datosCliente?.vencimiento }}</span></p>
            </div>
        </ion-item>

        <!--      <ion-item-options v-if="props.showProgressBarOptions" class="mr-1">
                <ion-item-option @click="eliminarFormulario" color="primary" class="rounded-md mt-1 w-16" mode="md">
                    <TrashIcon class="w-8" />
                </ion-item-option>
            </ion-item-options>
        </ion-item-sliding>-->
    </ion-list>
</template>

<script setup lang="ts">
import { IonList, IonItem, IonProgressBar, useIonRouter } from '@ionic/vue'
import { PropType, onMounted, ref } from 'vue';
import { DatosCardGenerales } from '@/interfaces/DatosCardGenerales';
import storage from '@/storage';

const router = useIonRouter();

const datoCampo = ref();
const datoProgress = ref();
const colorCardProgress = ref();
const colorCardBorder = ref();
const datosTabs = ref();

const props = defineProps({
    datosCliente: Object as PropType<DatosCardGenerales>,
    showProgressBarOptions: Boolean,
    token: String,
    mandarFormulario: Boolean,
    valorRouter: String,
})

onMounted(async () => {     
     datosTabs.value = props.datosCliente;

    if (props.datosCliente?.porcentaje == '1') {
        datoCampo.value = '100';
    } else {
        datoCampo.value = props.datosCliente?.porcentaje;
    }

    datoProgress.value = quitarPuntos(datoCampo.value);

    colorCardProgress.value = props.datosCliente?.porcentaje === '1' ? 'danger' : 'primary';
    colorCardBorder.value = props.datosCliente?.porcentaje === '1' ? 'border-danger' : 'border-primary';
});

const emit = defineEmits(['enviarInformacionBorrar']);

function quitarPuntos(cadena: string) {
    // Utiliza el método replace con una expresión regular para quitar los puntos
    return cadena.replace(/\./g, '');
}

const openMenu = async () => {    
    const serializedDatosTabs = JSON.stringify(datosTabs.value);
    await storage.set("informacionCard", serializedDatosTabs);
    router.push("/informacion");
};

</script>