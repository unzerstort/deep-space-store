<script setup>
import { VRow, VCol } from 'vuetify/components';
import OfferDetail from './OfferDetail.vue';
import CheckoutStepper from './CheckoutStepper.vue';
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
    <VRow>
        <VCol cols="3">
            <OfferDetail :offer="offer"></OfferDetail>
        </VCol>

        <VCol cols="9">
            <CheckoutStepper :offer="offer"></CheckoutStepper>
        </VCol>
    </VRow>
</template>