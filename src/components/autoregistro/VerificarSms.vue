<template>
    <div class="card gap-4 text-justify">
        <p>Se le ha enviado un SMS con su codigo de verificación espere unos minutos y si tiene problemas puede reenviar su código nuevamente.</p>
      <div class="">
        <Input
          placeholder="CÓDIGO SMS"
          v-model:modelValue="token"
          :maxlength="6"
          :required="true"
          :class="'uppercase'"
          :labelError="errores.tokenlabel"
          :error="errores.tokenerror"
        >
          <template v-slot:icon>
            <font-awesome-icon icon="fa-solid fa-code" class="h-4" />
          </template>
        </Input>
      </div>
  
    <button class="btn bg-secondary hover:bg-orange-600 border-secondary focus:ring-orange-600" :disabled="counter > 0" @click="enviarLogin()">
        VERIFICAR CÓDIGO
      </button>
      <button class="btn bg-primary hover:bg-primary border-primary focus:ring-green-600" @click="regresar()">REGRESAR</button>
    </div>
  </template>
  
  <script setup lang="ts">
  import Input from "@/components/generales/Input.vue";
  import { useIonRouter } from "@ionic/vue";
  import { ref } from "vue";
  
  const token = ref("");
  const counter = ref(0);
  const ionRouter = useIonRouter();
  const errores = ref({
    tokenerror: false,
    tokenlabel: "",
  });
  const emit = defineEmits(["regresar"]);
  
  const regresar = async () => {
    emit("regresar", true);
  };
  
  const enviarLogin = async () => {
      /*
    //autoregistrar usuario en s2credit
    const autoRegistro = await S2credit.AutoregistrarUsuario(idUsuario, celular, deviceID.identifier, llaveNotificacion);
   
  
    //cargar datos de sesion globales
    await Helpers.cargarSesion(idUsuario, autoRegistro.llaveConexion, deviceID.identifier, autoRegistro.username, true);

    //guardar datos en firestore
    await PermisosUsuarios.setUsuario(idUsuario, { infoDevice: deviceInfo, mantenerSesion: true });
    toastLoader.dismiss();
    */
    ionRouter.replace("/login");
  };
  </script>
  