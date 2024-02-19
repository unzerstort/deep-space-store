<script setup>
import { VApp, VMain, VStepper } from "vuetify/components";
import NavBar from "@/components/Navigation/NavBar.vue";
import MainCard from "@/components/Content/MainCard.vue";
import OfferCard from "@/components/Content/OfferCard.vue";
import FormPersonal from "@/components/Forms/FormPersonal.vue";
import FormDelivery from "@/components/Forms/FormDelivery.vue";
import FormPayment from "@/components/Forms/FormPayment.vue";
</script>

<script>
export default {
    data: () => ({
        offer: {},
    }),

    methods: {
        getOffer() {
            fetch(`https://api.deepspacestore.com/offers/${this.$route.params.id}`)
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

            <!-- <VStepper 
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
                        <FormPayment></FormPayment>
                    </MainCard>
                </template>
            </VStepper> -->
        </VMain>
    </VApp>
</template>
