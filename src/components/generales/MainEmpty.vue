<template>
    <div class="absolute inset-0 flex items-center justify-center opacity-10">
    <ion-row class="text-center">
        <ion-col size="12">
            <ion-icon :icon="alertCircleOutline" class="w-36 h-36 text-primary"></ion-icon>
            <ion-text class="ion-margin-top">
                <p class="text-3xl">{{ props.mensaje }}</p>
            </ion-text>
        </ion-col>
    </ion-row>
</div>
</template>

<script setup lang="ts">
import { IonCol, IonIcon, IonRow, IonText } from '@ionic/vue';
import { alertCircleOutline } from 'ionicons/icons';

const props = defineProps({
    mensaje: String
});

</script>

<style scoped>
#emptymessage {
    font-size: 50px;
    font-weight: 10%;
    opacity: 0.6;
    text-transform: uppercase;
}


</style>
