<script setup>
import { VForm, VInput } from 'vuetify/lib/components/index.mjs';

</script>

<script>

export default {

    data: () => ({
        zipCode: '',
    })

}

</script>

<template>
    <VContainer>
        <VForm>
            <VTextField v-model="zipCode" label="CEP" type="number"></VTextField>
        </VForm>
    </VContainer>
</template>

<style scoped>
</style>