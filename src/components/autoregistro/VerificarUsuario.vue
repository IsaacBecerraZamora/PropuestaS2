<template>
  <div class="card gap-4 text-justify">
    <p>
      Para poder comenzar con el autoregistro, debe de tener a la mano su <b>Identificador de Usuario</b> si no recuerda este dato haga favor de contactar con
      su sucursal asociada.
    </p>
    <div class="">
      <Input mode="numeric" placeholder="ID Usuario" v-model:modelValue="idUsuario" :maxlength="10" :required="true"
        :class="'uppercase'">
      <template v-slot:icon>
        <font-awesome-icon icon="fa-solid fa-user" class="h-4" />
      </template>
      </Input>
    </div>

    <div class="">
      <Input mode="tel" placeholder="Celular" v-model:modelValue="celular" :maxlength="10" :required="true"
        :class="'uppercase'">
      <template v-slot:icon>
        <font-awesome-icon icon="fa-solid fa-phone" class="h-4" />
      </template>
      </Input>
    </div>

    <button class="relative btn bg-secondary hover:bg-orange-500 border-secondary focus:ring-orange-400"
      @click="enviarSMS()">VERIFICAR</button>
  </div>
</template>
<script setup lang="ts">
import Input from "@/components/generales/Input.vue";
import { ref } from "vue";
const idUsuario = ref("");
const celular = ref("");
const tokenSMS = ref("ABC123");

const emit = defineEmits(["sendsms"]);

const enviarSMS = () => {
  const emitData = {
    tokenSMS: tokenSMS.value,
    celular: celular.value,
    idUsuario: Number(idUsuario.value),
  };

  emit("sendsms", emitData);
};

</script>
  
