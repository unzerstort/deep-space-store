<script setup>
import { VRow, VCol, VStepper } from 'vuetify/components';
import MainCard from './MainCard.vue';
import FormPersonal from "@/components/Forms/FormPersonal.vue";
import FormDelivery from "@/components/Forms/FormDelivery.vue";
import FormPayment from "@/components/Forms/FormPayment.vue";
import OfferDetail from './OfferDetail.vue';

import { ref } from 'vue';

const modelValue = ref('')

const props = defineProps({
    offer: Object,
});

const steps = ref([
    {name: 'Dados Pessoais', valid: true},
    {name: 'Dados Entrega', valid: true},
    {name: 'Dados Pagamento', valid: true}
])


</script>

<template>
    <VRow>
        <VCol cols="3">
            <OfferDetail :offer="offer"></OfferDetail>
        </VCol>
        
        <VCol cols="9">
            <VStepper 
                alt-labels 
                editable
                :items="['Dados pessoais', 'Dados de entrega', 'Forma de pagamento']"
            >
                <template v-slot:item.1>
                    <MainCard>
                        <FormPersonal v-model="steps[0].valid"></FormPersonal>
                    </MainCard>
                </template>
        
                <template v-slot:item.2>
                    <MainCard>
                        <FormDelivery></FormDelivery>
                    </MainCard>
                </template>
        
                <template v-slot:item.3>
                    <MainCard>
                        <FormPayment :paymentOptions="offer.paymentOptions"></FormPayment>
                    </MainCard>
                </template>
            </VStepper>
        </VCol>
    </VRow>
</template>
