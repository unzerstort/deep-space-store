<script setup>
import { VContainer, VForm, VRadioGroup, VRadio, VTextField } from 'vuetify/components';
import BillPayment from '@/components/Payment/BillPayment.vue';
import CardPayment from '@/components/Payment/CardPayment.vue';
import PixPayment from '@/components/Payment/PixPayment.vue';
import { ref } from 'vue';

const selectedPayment = ref('');

</script>

<template>
    <VContainer>
        <VForm>
            <VRadioGroup label="Selecione o meio de pagamento:" v-model="selectedPayment">
                <VRadio 
                    label="Boleto" 
                    id="bill" 
                    value="bill"
                ></VRadio>
                <VRadio 
                    label="Cartão de crédito" 
                    id="card" 
                    value="card"
                ></VRadio>
                <VRadio 
                    label="Pix" 
                    id="pix" 
                    value="pix"
                ></VRadio>
            </VRadioGroup>
            
            <BillPayment v-if="selectedPayment === 'bill'"></BillPayment>
            <CardPayment v-if="selectedPayment === 'card'"></CardPayment>
            <PixPayment v-if="selectedPayment === 'pix'"></PixPayment>


            <VTextField label="Informe o CPF" type="number" variant="outlined"></VTextField>

        </VForm>
    </VContainer>
</template>