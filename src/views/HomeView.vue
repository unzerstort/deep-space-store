<script setup>
import NavBar from "@/components/Navigation/NavBar.vue";
import MainCard from "@/components/Content/MainCard.vue";
import OfferCard from "@/components/Content/OfferCard.vue";
import FormPessoal from "@/components/Forms/FormPessoal.vue";
import FormEntrega from "@/components/Forms/FormEntrega.vue";
import FormPagamento from "@/components/Forms/FormPagamento.vue";

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
                        <FormEntrega></FormEntrega>
                    </MainCard>
                </template>

                <template v-slot:item.3>
                    <MainCard>
                        <FormPagamento></FormPagamento>
                    </MainCard>
                </template>
            </VStepper>
        </VMain>
    </VApp>
</template>
