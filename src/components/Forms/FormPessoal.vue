<script setup>
import { VForm, VInput } from 'vuetify/lib/components/index.mjs';
import MainCard from '../Content/MainCard.vue';

</script>

<script>

export default {

    data: () => ({
        name: '',
        email: '',
        phone: '',
    })

}

</script>

<template>
    <VContainer>
        <VForm>
            <VTextField v-model="name" label="Nome completo"></VTextField>
            <VTextField v-model="email" label="E-mail"></VTextField>
            <VTextField v-model="phone" label="Telefone" required></VTextField>
        </VForm>
    </VContainer>
</template>

<style scoped>
</style>