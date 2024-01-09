<template>
        <div class="grid grid-cols-2 mr-2 ml-2 shadow-2xl border-t-4 border-primary rounded-xl">
            <div class="col-span-1 p-1 bg-tertiary text-white rounded-l-lg ">
                <div class="ml-2 pb-1 pt-1 ">
                    <p><span class="font-semibold text-left text-sm">Referencias</span></p>
                    <p><span class="text-sm text-center">{{ props.referenciaResultado }}</span></p>
                </div>
                <div class="ml-2 pb-1 pt-1">
                    <p><span class="font-semibold text-sm text-left">Convenio</span></p>
                    <p><span class="text-sm text-center">{{ props.convenioResultado }}</span></p>
                </div>
            </div>
            <div class="col-span-1 rounded-r-lg shadow-2xl">
                <div class="text-center justify-center items-center my-auto">
                    prueba
                </div>
            </div>
        </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
    referenciaResultado: String,
    convenioResultado: String,
});

</script>