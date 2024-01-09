<template>
    <ion-page>
        <ion-content :fullscreen="false">
            <nav
                class="relative border-primary bg-primary sm:mr-10 sm:ml-10 md:mr-40 md:ml-40 lg:mr-60 lg:ml-60 xl:mr-80 xl:ml-80 2xl:mr-96 2xl:ml-96 border opacity-100">
                <div class="mt-5 mb-10">
                    <img src="/relampago.png" alt="s2red-usuarios" class="w-[80%] lg:w-[30%] xl:w-[20%] mx-auto relative" />
                  </div>
            </nav>
            <div
                class="relative overflow-hidden -mt-10 p-1 rounded-t-3xl bg-white sm:mr-10 sm:ml-10 md:mr-40 md:ml-40 lg:mr-60 lg:ml-60 xl:mr-80 xl:ml-80 2xl:mr-96 2xl:ml-96 pb-5 z-50 opacity-100 rounded-lg">
                <div class="grid grid-cols-4 xl:grid-cols-12 gap-4">
                    <div class="relative col-span-4 lg:col-start-2 lg:col-span-2 xl:col-start-5 xl:col-span-4 p-4 my-[1%]">
                        <div class="relative text-center justify-center mx-auto">
                            <a class="pl-5 pr-5 pt-1 items-center">
                                <span class="flex text-left ml-5 text-xl font-semibold text-primary">AUTOREGISTRO</span>
                            </a>
                        </div>
                        <VerificarUsuario @sendsms="verificarSMS" v-if="!showVerificador"></VerificarUsuario>
                        <VerificarSms @regresar="regresar" v-if="showVerificador"></VerificarSms>
                    </div>
                </div>
            </div>
        </ion-content>
        <ion-footer :translucent="true" class="ion-no-border">
           <ion-toolbar class="text-center p-2 text-gray-600 font-bold">
            <img src="/s2credit.png" class="w-[20%] my-3 mx-auto bg-cover" />
        </ion-toolbar>
        </ion-footer>
    </ion-page>
</template>
  
<script setup lang="ts">
import VerificarSms from "@/components/autoregistro/VerificarSms.vue";
import VerificarUsuario from "@/components/autoregistro/VerificarUsuario.vue";
import { VERSION } from "@/config/Constantes";
import Helpers from "@/config/Helpers";
import { IonContent, IonFooter, IonPage, IonToolbar } from "@ionic/vue";
import { onMounted, ref } from "vue";

const showVerificador = ref(false);

onMounted(async () => {
    Helpers.checkStatusBarOverlay(false);
    await Helpers.checkStatusBar("#02666a");

});

const verificarSMS = async (event: any) => {
    if(event.tokenSMS.length > 0){
        showVerificador.value = true;
    }
};

const regresar = (dato: any) => {
  if(dato == true ){
    showVerificador.value = false;
  }
}
</script>
