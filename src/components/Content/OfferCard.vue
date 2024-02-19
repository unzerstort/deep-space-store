<script setup>
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
</template>
