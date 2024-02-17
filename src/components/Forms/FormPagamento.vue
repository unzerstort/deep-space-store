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
            <VRadioGroup label="Selecione o meio de pagamento:">
                <VRadio label="Boleto"></VRadio>
                <VRadio label="Cartão de crédito"></VRadio>
                <VRadio label="Pix"></VRadio>
            </VRadioGroup>

            <VTextField label="Informe o CPF" type="number"></VTextField>

        </VForm>
    </VContainer>
</template>

<style scoped>
</style>