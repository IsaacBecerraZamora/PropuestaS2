<template>
    <ion-page>
        <ion-content :fullscreen="false">
            <nav
                class="relative border-primary bg-primary sm:mr-10 sm:ml-10 md:mr-40 md:ml-40 lg:mr-60 lg:ml-60 xl:mr-80 xl:ml-80 2xl:mr-96 2xl:ml-96 border opacity-100 shadow-2xl">
                <div class="mt-5 mb-10">
                    <img src="/relampago.png" alt="s2red-usuarios" class="w-[80%] lg:w-[30%] xl:w-[20%] mx-auto relative" />
                </div>
            </nav>
            <div
                class="relative overflow-hidden -mt-10 p-1 rounded-t-3xl bg-gray-50 sm:mr-10 sm:ml-10 md:mr-40 md:ml-40 lg:mr-60 lg:ml-60 xl:mr-80 xl:ml-80 2xl:mr-96 2xl:ml-96 bg-no-repeat pb-5 z-50 border border-gray-50 opacity-100 rounded-lg">
                <a class="pl-5 pr-5 pt-1 items-center">
                    <span class="flex text-left ml-5 text-xl font-semibold text-primary">BIENVENIDO</span>
                </a>
                <div class="grid grid-rows-1">
                    
                    <div class="grid grid-cols-4 xl:grid-cols-12">
                        <div class="col-span-4 lg:col-start-2 lg:col-span-2 xl:col-start-5 xl:col-span-4 px-4">
                            <div class="card gap-4 relative">
                                <div class="">
                                    <Input placeholder="Usuario" id="username" v-model:modelValue="username" disabled>
                                    <template v-slot:icon>
                                        <font-awesome-icon icon="fa-solid fa-user" class="h-4" />
                                    </template>
                                    </Input>
                                </div>

                                <div class="">
                                    <Input placeholder="Contraseña" id="password" v-model:modelValue="password"
                                        :type="showPassword ? 'text' : 'password'" :maxlength="50" :required="true"
                                        :labelError="errores.passwordlabel" :error="errores.passworderror">
                                    <template v-slot:icon>
                                        <font-awesome-icon icon="fa-solid fa-lock" class="h-4" />
                                    </template>
                                    <template v-slot:iconright>
                                        <font-awesome-icon icon="fa-regular fa-eye" class="h-4 mr-2" @click="eventPassword()"
                                        v-if="showPassword" />
                                        <font-awesome-icon icon="fa-regular fa-eye-slash" class="h-4 mr-2" @click="eventPassword()"
                                        v-if="!showPassword" />
                                    </template>
                                    </Input>
                                </div>

                                <button class="btn bg-secondary hover-secondary" @click="acceder()">ACCEDER</button>

                                <div class="text-right">
                                    <label class="relative inline-flex items-center mb-4 cursor-pointer">
                                        <input type="checkbox" value="" class="sr-only peer" :checked="mantenerSesion"
                                            @click="eventMantenerSesion()" />
                                        <span class="mr-2 text-sm font-semibold text-gray-900">Mantener Sesión</span>
                                        <div
                                            class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-2 peer-focus:ring-green-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:right-[22px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary">
                                        </div>
                                    </label>
                                </div>
                            </div>

                            <div class="text-center mt-2">
                                <p class="font-semibold">Si ha olvidado su contraseña, favor de contactar con su sucursal
                                    para poder solicitar una nueva.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ion-content>
        <ion-footer :translucent="true" class="ion-no-border">
            <ion-toolbar class="text-center p-2 text-gray-600 font-bold">
             <p class="font-bold mb-2">V {{ VERSION }}</p>
         </ion-toolbar>
         </ion-footer>
    </ion-page>
</template>
  
<script setup lang="ts">
import Input from "@/components/generales/Input.vue";
import { VERSION } from "@/config/Constantes";
import Helpers from "@/config/Helpers";
import { IonContent, IonFooter, IonPage, useIonRouter, IonToolbar } from "@ionic/vue";
import { ref } from "vue";

const ionRouter = useIonRouter();
const username = ref("");
const password = ref("");
const mantenerSesion = ref(false);
const showPassword = ref(false);
const errores = ref({
    usernameerror: false,
    usernamelabel: "",
    passworderror: false,
    passwordlabel: "",
});


const eventPassword = () => {
    showPassword.value = !showPassword.value;
};

const eventMantenerSesion = () => {
    mantenerSesion.value = !mantenerSesion.value;
};

const acceder = async () => {

    Helpers.toastMessage("Bienvenido al sistemas", "success");
    ionRouter.replace("/dashboard");
};
</script>
  