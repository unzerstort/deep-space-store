<script setup>
import { VContainer, VForm, VRadioGroup, VRadio, VTextField, VBtn } from 'vuetify/components';
import BillPayment from '@/components/Payment/BillPayment.vue';
import CardPayment from '@/components/Payment/CardPayment.vue';
import PixPayment from '@/components/Payment/PixPayment.vue';

let selectedPayment = ''

const cpfRegex = /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/;

const props = defineProps({
    paymentOptions: {
        type: Array,
    },
});

const rules = {
    required:v => !!v || 'Campo é obrigatório',
    cpf: v => cpfRegex.test(v) && (v.length > 0 && !(v.split('').every(c => {return c === v[0]}))) && v.length === 11 || 'CPF inválido',
};

</script>

<template>
    <VContainer>
        <VForm>
            <VRadioGroup label="Selecione o meio de pagamento:" v-model="selectedPayment">
                <VRadio 
                    label="Boleto" 
                    id="bill" 
                    value="bill"
                    v-if="paymentOptions.includes('bill')"
                ></VRadio>
                <VRadio 
                    label="Cartão de crédito" 
                    id="card" 
                    value="card"
                    v-if="paymentOptions.includes('card')"
                ></VRadio>
                <VRadio 
                    label="Pix" 
                    id="pix" 
                    value="pix"
                    v-if="paymentOptions.includes('pix')"
                ></VRadio>
            </VRadioGroup>
            
            <BillPayment v-if="selectedPayment === 'bill'"></BillPayment>
            <CardPayment v-if="selectedPayment === 'card'"></CardPayment>
            <PixPayment v-if="selectedPayment === 'pix'"></PixPayment>


            <VTextField 
                label="Informe o CPF" 
                type="number" 
                variant="outlined"
                :rules="[rules.required, rules.cpf]"
            ></VTextField>

        </VForm>
    </VContainer>
</template>
