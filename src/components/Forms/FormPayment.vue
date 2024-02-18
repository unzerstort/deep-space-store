<script setup>
import { VContainer, VForm, VRadioGroup, VRadio, VTextField } from 'vuetify/components';

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
                <VRadio label="Boleto" value="bill"></VRadio>
                <VRadio label="Cartão de crédito" value="card"></VRadio>
                <VRadio label="Pix" value="pix"></VRadio>
            </VRadioGroup>

            <VTextField label="Informe o CPF" type="number"></VTextField>

        </VForm>
    </VContainer>
</template>

<style scoped>
</style>