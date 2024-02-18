<script setup>
import { VContainer, VForm, VTextField } from 'vuetify/components';

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