<script setup>
import { VTextField } from 'vuetify/components';
</script>

<template>
    <p> Insira os dados do cartão: </p>
    <VTextField 
        label="Número do cartão" 
        variant="outlined"
    ></VTextField>
    <VTextField 
        label="Validade"
        variant="outlined"
    ></VTextField>
    <VTextField 
        label="CVC" 
        variant="outlined"></VTextField>
    <VTextField 
        label="Nome do titular" 
        variant="outlined"
    ></VTextField>
</template>