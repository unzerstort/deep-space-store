<script setup>
import { VStepper } from 'vuetify/components'
import MainCard from './MainCard.vue';
import FormPersonal from "@/components/Forms/FormPersonal.vue";
import FormDelivery from "@/components/Forms/FormDelivery.vue";
import FormPayment from "@/components/Forms/FormPayment.vue";
import OfferDetail from './OfferDetail.vue';
</script>

<script>
export default {
    props: {
        offer: {
            type: Object,
        },
    }
}
</script>

<template>
    <OfferDetail :offer="offer"></OfferDetail>
    <VStepper 
        alt-labels 
        editable
        :items="['Dados pessoais', 'Dados de entrega', 'Forma de pagamento']"
    >

        <template v-slot:item.1>
            <MainCard>
                <FormPersonal></FormPersonal>
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
</template>
