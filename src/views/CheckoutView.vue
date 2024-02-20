<script setup>
import { VApp, VMain } from "vuetify/components";
import NavBar from "@/components/Navigation/NavBar.vue";
import OfferCard from "@/components/Content/OfferCard.vue";

</script>

<script>
export default {
    data: () => ({
        offer: {},
    }),

    methods: {
        getOffer() {
            fetch(`https://api.deepspacestore.com/offers/${this.$route.params.id}/`)
                .then(response => response.json())
                .then(data => this.offer = data)
                .catch(error => console.error('Error fetching data: ', error));
        }
    },

    mounted() {
        this.getOffer();
    }
}
</script>

<template>
    <VApp>
        <NavBar />
        <VMain>
            <OfferCard :offer="offer"></OfferCard>
        </VMain>
    </VApp>
</template>
