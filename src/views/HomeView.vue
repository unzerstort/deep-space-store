<script setup>
import { VApp, VMain, VStepper } from "vuetify/components";
import NavBar from "@/components/Navigation/NavBar.vue";
import MainCard from "@/components/Content/MainCard.vue";
import OfferCard from "@/components/Content/OfferCard.vue";
import FormPessoal from "@/components/Forms/FormPessoal.vue";
import FormDelivery from "@/components/Forms/FormDelivery.vue";
import FormPayment from "@/components/Forms/FormPayment.vue";

</script>

<template>
    <VApp>
        <NavBar />
        <VMain>
            <OfferCard></OfferCard>

            <VStepper 
                alt-labels 
                editable
                :items="['Dados pessoais', 'Dados de entrega', 'Forma de pagamento']"
            >

                <template v-slot:item.1>
                    <MainCard>
                        <FormPessoal></FormPessoal>
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
            </VStepper>
        </VMain>
    </VApp>
</template>
