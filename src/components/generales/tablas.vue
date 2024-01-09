<template>
    <div class="p-3 sm:mr-10 sm:ml-10 md:mr-40 md:ml-40 lg:mr-60 lg:ml-60 xl:mr-80 xl:ml-80 2xl:mr-96 2xl:ml-96">
        <div class="relative bg-white shadow-2xl rounded-xl">
            <div class="bg-tertiary p-2 rounded-t-xl">
                <div class="grid grid-cols-9">
                    <div class="col-span-1 ml-2">
                        <div class="absolute w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                        <font-awesome-icon icon="fa-solid fa-dollar-sign" class="flex w-5 h-5 text-white" />
                        </div>
                    </div>
                    <div class="col-span-8 text-left ml-4">
                        <span class="text-white text-2xl mt-0.5">{{ props.titulo }}</span>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-9">
                <div class="col-span-3 bg-tertiary rounded-b-xl">
                    <div class="relative grid-rows-8 text-left text-white ml-5">
                        <div class="row-1 p-1 font-semibold border-b">{{ tabla.subtitulo1 }}</div>
                        <div class="row-1 p-1 font-semibold border-b">{{ tabla.subtitulo2 }}</div>
                        <div class="row-1 p-1 font-semibold border-b">{{ tabla.subtitulo3 }}</div>
                        <div class="row-1 p-1 font-semibold border-b">{{ tabla.subtitulo4 }}</div>
                    </div>
                </div>
                <div class="col-span-6 ml-2">
                    <div class="relative grid-rows-8 text-left">
                        <div :class="optionResultado1">{{ tabla.resultado1 }}</div>
                        <div :class="optionResultado2">{{ tabla.resultado2 }}</div>
                        <div :class="optionResultado3">{{ tabla.resultado3 }}</div>
                        <div :class="optionResultado4">{{ tabla.resultado4 }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'

const optionResultado1 = ref("");
const optionResultado2 = ref("");
const optionResultado3 = ref("");
const optionResultado4 = ref("");

const props = defineProps({
    titulo: String,
    subtitulo1: String,
    subtitulo2: String,
    subtitulo3: String,
    subtitulo4: String,
    resultado1: String,
    resultado2: String,
    resultado3: String,
    resultado4: String,

});

const tabla = ref({
    subtitulo1: "",
    subtitulo2: "",
    subtitulo3: "",
    subtitulo4: "",
    resultado1: "",
    resultado2: "",
    resultado3: "",
    resultado4: "",
});

onMounted(async () => {
    if (props.titulo) {
        if (props.subtitulo1 != "") {
            tabla.value.subtitulo1 = String(props.subtitulo1);
        } else {
            tabla.value.subtitulo1 = "E";
        };

        if (props.subtitulo2 != "") {
            tabla.value.subtitulo2 = String(props.subtitulo2);
        } else {
            tabla.value.subtitulo2 = "E";
        };

        if (props.subtitulo3 != "") {
            tabla.value.subtitulo3 = String(props.subtitulo3);
        } else {
            tabla.value.subtitulo3 = "E";
        };

        if (props.subtitulo4 != "") {
            tabla.value.subtitulo4 = String(props.subtitulo4);
        } else {
            tabla.value.subtitulo4 = "E";
        };

        if (props.resultado1 != "") {
            tabla.value.resultado1 = String(props.resultado1);
        } else {
            tabla.value.resultado1 = "E";
        };

        if (props.resultado2 != "") {
            tabla.value.resultado2 = String(props.resultado2);
        } else {
            tabla.value.resultado2 = "E";
        };

        if (props.resultado3 != "") {
            tabla.value.resultado3 = String(props.resultado3);
        } else {
            tabla.value.resultado3 = "E";
        };

        if (props.resultado4 != "") {
            tabla.value.resultado4 = String(props.resultado4);
        } else {
            tabla.value.resultado4 = "E";
        };


        optionResultado1.value = tabla.value.resultado1 == "E" ? 'row-1 p-1 border-b text-white' : 'row-1 p-1 border-b';
        optionResultado2.value = tabla.value.resultado2 == "E" ? 'row-1 p-1 border-b text-white' : 'row-1 p-1 border-b';
        optionResultado3.value = tabla.value.resultado3 == "E" ? 'row-1 p-1 border-b text-white' : 'row-1 p-1 border-b';
        optionResultado4.value = tabla.value.resultado4 == "E" ? 'row-1 p-1 border-b text-white' : 'row-1 p-1 border-b';
    }
});


</script>
    