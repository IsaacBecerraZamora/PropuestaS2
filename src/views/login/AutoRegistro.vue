<template>
    <ion-page>
        <ion-content :fullscreen="false">
            <nav
                class="relative bg-primary border-gray-200 sm:mr-10 sm:ml-10 md:mr-40 md:ml-40 lg:mr-60 lg:ml-60 xl:mr-80 xl:ml-80 2xl:mr-96 2xl:ml-96 border opacity-100 rounded-lg shadow-2xl">
                <div class="mt-5 mb-10">
                    <img src="/relampago.png" alt="s2red-usuarios" class="w-[80%] lg:w-[30%] xl:w-[20%] mx-auto relative" />
                  </div>
            </nav>
            <div
                class="relative overflow-hidden -mt-10 p-1 rounded-t-3xl bg-gray-50 sm:mr-10 sm:ml-10 md:mr-40 md:ml-40 lg:mr-60 lg:ml-60 xl:mr-80 xl:ml-80 2xl:mr-96 2xl:ml-96 bg-no-repeat pb-5 z-50 border border-gray-50 opacity-100 rounded-lg">
                <div class="grid grid-cols-4 xl:grid-cols-12 gap-4">
                    <div class="absolute bg-fixed h-screen w-screen bg-cover bg-no-repeat opacity-10 bg-[url(/Fondo.jpg)] z-0">
                    </div>
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
                <img src="/s2credit.png" class="w-[40%] my-10 mx-auto bg-cover" />
            </div>
        </ion-content>
        <ion-footer class="text-center pl-2 pr-2 pt-2 bg-white text-gray-600 font-bold">
            <p class="font-bold">V {{ VERSION }}</p>
          <div class="text-center justify-center pl-24 pr-24 p-2">
            <p class="text-xs font-bold opacity-60">RED DE SERVICIOS FINANCIEROS, S.A. DE C.V. SOFOM ENR</p>
          </div>
        </ion-footer>
    </ion-page>
</template>
  
<script setup lang="ts">
import VerificarSms from "@/components/autoregistro/VerificarSms.vue";
import VerificarUsuario from "@/components/autoregistro/VerificarUsuario.vue";
import { VERSION } from "@/config/Constantes";
import Helpers from "@/config/Helpers";
import { IonContent, IonFooter, IonPage } from "@ionic/vue";
import { onMounted, ref } from "vue";

const showVerificador = ref(false);

onMounted(async () => {
    Helpers.checkStatusBarOverlay(false);
    await Helpers.checkStatusBar("#025436");

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
<style scoped>
.absolute.bg-fixed {
  background-size: cover; /* Ajusta según sea necesario */
  /* Otros estilos... */
}
</style>