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
            <VTextField label="Nome completo"></VTextField>
            <VTextField label="E-mail" placeholder="johndoe@gmail.com" type="email"></VTextField>
            <VTextField label="Telefone" required></VTextField>
        </VForm>
    </VContainer>
</template>

<style scoped>
</style>