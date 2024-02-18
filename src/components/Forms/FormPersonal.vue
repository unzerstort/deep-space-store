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
            <VTextField 
                label="Nome completo"
                variant="outlined"
            ></VTextField>
            <VTextField 
                label="E-mail" 
                placeholder="johndoe@gmail.com" 
                type="email"
                variant="outlined"
            ></VTextField>
            <VTextField 
                label="Telefone" 
                required
                variant="outlined"
            ></VTextField>
        </VForm>
    </VContainer>
</template>

<style scoped>
</style>