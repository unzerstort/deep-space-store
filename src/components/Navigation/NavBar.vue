<script setup>
import { VAppBar, VAppBarTitle, VResponsive, VTextField } from 'vuetify/components';
import AccMenu from './AccMenu.vue';


</script>
        
<script>
export default {
    data: () => ({ }),
}
</script>

<template>
    <VAppBar>
        <VAppBarTitle text="Deep Space Store"></VAppBarTitle>

        <VResponsive max-width="300">
            <VTextField
                density="compact"
                flat
                hide-details
                label="Busca"
                rounded="lg"
                single-line
                variant="solo-filled"
            ></VTextField>
        </VResponsive>

        <AccMenu />

    </VAppBar>
</template>

<style scoped>
</style>