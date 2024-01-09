<template>
  <nav
    class="relative bg-primary sm:mr-10 sm:ml-10 md:mr-40 md:ml-40 lg:mr-60 lg:ml-60 xl:mr-80 xl:ml-80 2xl:mr-96 2xl:ml-96 opacity-100 shadow-2xl">
    <div :class="optionClass">
      <a class="grid grid-cols-3 items-center">
        <span class="flex col-span-2 mx-auto text-left ml-5 text-xl font-semibold text-white">{{ props.titulo }}</span>
      </a>
    </div>

    <div v-if="props.titulo == 'GENERALES' || props.titulo == 'CONFIGURACIONES'" class="p-2 -mt-8 bg-tertiary">
      <div class="grid grid-cols-10 mb-5 mt-3">
        <div class="col-span-2 flex items-center justify-end">
          <div class="">
            <font-awesome-icon icon="fa-solid fa-circle-user" class="w-16 h-16 text-white" />
          </div>
        </div>
        <div class="col-span-8 ml-3">
          <div class="grid grid-rows-2 text-white">
            <div class="row-1 font-semibold text-xl">{{ props.nombreUsuario }}</div>
            <div class="row-1 -mt-2">
              <div class="grid grid-cols-6">
                <div class="col-span-2">
                  <p class="font-semibold">ID Cliente:</p>
                  <p class="font-semibold">CURP:</p>
                </div>
                <div class="col-span-4">
                  <p class="">{{ props.idCliente }}</p>
                  <p class="">{{ props.curp }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
  
<script setup lang="ts">
import { useIonRouter } from '@ionic/vue';
import { onMounted, ref } from 'vue';

const optionClass = ref();

onMounted(() => {
  optionClass.value = props.titulo === 'GENERALES' || props.titulo === 'CONFIGURACIONES' ? 'relative text-center justify-center mx-auto mb-8 p-2 max-w-screen-xl shadow-xl' : 'relative text-center justify-center mx-auto p-2 max-w-screen-xl';
});

const ionRouter = useIonRouter();
const notificaciones = () => {
  ionRouter.replace('/notificaciones');
};

const props = defineProps({
  titulo: String,
  nombreUsuario: String,
  idCliente: String,
  curp: String,
});
</script>