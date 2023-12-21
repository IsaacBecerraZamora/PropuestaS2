<template>
    <div class="fixed bg-fixed h-screen w-screen bg-cover bg-no-repeat opacity-10 bg-[url(/Fondo.jpg)] z-0"></div>
    <div class="relative sm:mr-10 sm:ml-10 md:mr-40 md:ml-40 lg:mr-60 lg:ml-60 xl:mr-80 xl:ml-80 2xl:mr-96 2xl:ml-96">
        <div class="mt-5">
            <div class="absolute inset-24 bg-gray-500 flex items-center justify-center">
                <div class="relative bg-gray-300 rounded-full shadow-2xl shadow-black opacity-80 p-2">
                    <div class="relative bg-slate-300 rounded-full p-2">
                        <ion-icon class="w-24 h-24 p-2 text-primary opacity-60" :icon="businessOutline" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="p-5 mt-56 sm:mr-10 sm:ml-10 md:mr-40 md:ml-40 lg:mr-60 lg:ml-60 xl:mr-80 xl:ml-80 2xl:mr-96 2xl:ml-96">

        <div class="relative bg-white shadow-2xl p-1">
            <div class="grid grid-cols-9">
                <div class="col-span-3 bg-slate-200 rounded-md ">
                    <div class="relative grid-rows-8 text-left ml-5">
                        <div class="row-1 p-1 font-semibold border-b">Sucursal:</div>
                        <div class="row-1 p-1 font-semibold border-b">Dirección:</div>
                        <div class="row-1 p-1 font-semibold border-b">Colonia:</div>
                        <div class="row-1 p-1 font-semibold border-b">Ciudad:</div>
                        <div class="row-1 p-1 font-semibold border-b">Estado:</div>
                        <div class="row-1 p-1 font-semibold border-b">C.P.:</div>
                        <div class="row-1 p-1 font-semibold border-b">Teléfono:</div>
                        <div class="row-1 p-1 font-semibold border-b">Correo:</div>
                    </div>
                </div>
                <div class="col-span-6 ml-2">
                    <div class="relative grid-rows-8 text-left">
                        <div :class="optionClassSucursales">{{ informacionEmpresa.sucursal }}</div>
                        <div :class="optionClassDireccion">{{ informacionEmpresa.dirección }}</div>
                        <div :class="optionClassColonia">{{ informacionEmpresa.colonia }}</div>
                        <div :class="optionClassCiudad">{{ informacionEmpresa.ciudad }}</div>
                        <div :class="optionClassEstado">{{ informacionEmpresa.estado }}</div>
                        <div :class="optionClassCp">{{ informacionEmpresa.cp }}</div>
                        <div :class="optionClassTelefono">{{ informacionEmpresa.teléfono }}</div>
                        <div :class="optionClassCorreo">{{ informacionEmpresa.correo }}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="relative">
            <button @click="llevarUbicacion" class="btn bg-primary hover:bg-emerald-900 rounded-b-lg">Ubicación Sucursal</button>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { onMounted, PropType, ref } from "vue";
import { businessOutline } from 'ionicons/icons';
import { DatosEmpresa } from '@/interfaces/interfacesComponentes/DatosEmpresa';

const props = defineProps({ datos: Object as PropType<DatosEmpresa> });
const optionClassSucursales = ref("");
const optionClassDireccion = ref("");
const optionClassColonia = ref("");
const optionClassCiudad = ref("");
const optionClassEstado = ref("");
const optionClassCp = ref("");
const optionClassTelefono = ref("");
const optionClassCorreo = ref("");

const informacionEmpresa = ref({
    sucursal: "",
    dirección: "",
    colonia: "",
    ciudad: "",
    estado: "",
    cp: "",
    teléfono: "",
    correo: "",
});

onMounted(() => {
    if (props.datos) {
        if (props.datos.sucursal != "") {
            informacionEmpresa.value.sucursal = props.datos.sucursal;
        } else {
            informacionEmpresa.value.sucursal = "E";
        };
        if (props.datos.dirección != "") {
            informacionEmpresa.value.dirección = props.datos.dirección;
        } else {
            informacionEmpresa.value.dirección = "E";
        };
        if (props.datos.colonia != "") {
            informacionEmpresa.value.colonia = props.datos.colonia;
        } else {
            informacionEmpresa.value.colonia = "E";
        };
        if (props.datos.ciudad != "") {
            informacionEmpresa.value.ciudad = props.datos.ciudad;
        } else {
            informacionEmpresa.value.ciudad = "E";
        };
        if (props.datos.estado != "") {
            informacionEmpresa.value.estado = props.datos.estado;
        } else {
            informacionEmpresa.value.estado = "E";
        };
        if (props.datos.cp != "") {
            informacionEmpresa.value.cp = props.datos.cp;
        } else {
            informacionEmpresa.value.cp = "E";
        };
        /////
        if (props.datos.teléfono != "") {
            informacionEmpresa.value.teléfono = props.datos.teléfono;
        } else {
            informacionEmpresa.value.teléfono = "E";
        };
        /////
        if (props.datos.correo != "") {
            informacionEmpresa.value.correo = props.datos.correo;
        } else {
            informacionEmpresa.value.correo = "E";
        };

        optionClassSucursales.value = informacionEmpresa.value.sucursal == "E" ? 'row-1 p-1 border-b text-white' : 'row-1 p-1 border-b';
        optionClassDireccion.value = informacionEmpresa.value.dirección == "E" ? 'row-1 p-1 border-b text-white' : 'row-1 p-1 border-b';
        optionClassColonia.value = informacionEmpresa.value.colonia == "E" ? 'row-1 p-1 border-b text-white' : 'row-1 p-1 border-b';
        optionClassCiudad.value = informacionEmpresa.value.ciudad == "E" ? 'row-1 p-1 border-b text-white' : 'row-1 p-1 border-b';
        optionClassEstado.value = informacionEmpresa.value.estado == "E" ? 'row-1 p-1 border-b text-white' : 'row-1 p-1 border-b';
        optionClassCp.value = informacionEmpresa.value.cp == "E" ? 'row-1 p-1 border-b text-white' : 'row-1 p-1 border-b';
        optionClassTelefono.value = informacionEmpresa.value.teléfono == "E" ? 'row-1 p-1 border-b text-white' : 'row-1 p-1 border-b';
        optionClassCorreo.value = informacionEmpresa.value.correo == "E" ? 'row-1 p-1 border-b text-white' : 'row-1 p-1 border-b';
    }
});

const llevarUbicacion = () => {
   
};

const emit = defineEmits(["update:modelValue", "change"]);

</script>
  