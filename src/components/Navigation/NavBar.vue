<script setup>
import { VAppBar, VIcon, VAppBarTitle, VResponsive, VTextField } from 'vuetify/components';
import AccMenu from './AccMenu.vue';

</script>

<template>
    <VAppBar>
        <VIcon icon="mdi-rocket" end></VIcon>
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
                prepend-inner-icon="mdi-magnify"
            ></VTextField>
        </VResponsive>

        <AccMenu />

    </VAppBar>
</template>

<style scoped>
</style>