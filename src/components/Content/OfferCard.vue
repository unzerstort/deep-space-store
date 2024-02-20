<script setup>
import { ref } from 'vue';
import { VStepper, VStepperHeader, VStepperItem, VStepperWindow, VDivider, VBtn, VRow, VCol } from 'vuetify/components';
import FormPersonal from '../Forms/FormPersonal.vue';
import FormDelivery from '../Forms/FormDelivery.vue';
import FormPayment from '../Forms/FormPayment.vue';
import OfferDetail from '../Content/OfferDetail.vue';

const props = defineProps({
    offer: Object,
});

const currStep = ref(0);

const steps = ref([
    {name: 'Dados Pessoais', valid: false},
    {name: 'Dados Entrega', valid: false},
    {name: 'Dados Pagamento', valid: false}
])

const stepComplete = (step) => currStep.value > step;
const stepStatus = (step) => currStep.value >= step ? "green" : "blue";

const nextStep = () => {
    currStep.value++;
};

const prevStep = () => {
    if (currStep.value > 0) currStep.value--;
};


</script>

<template>
    <VRow>
        <VCol cols="3">
            <OfferDetail :offer="offer"></OfferDetail>
        </VCol>

        <VCol cols="9">

            <VStepper v-model="currStep" color="green" alt-labels editable>
                <VStepperHeader class="overflow-x-auto">
                    <VStepperItem
                        :complete="stepComplete(0)"
                        step="1"
                        :color="stepStatus(0)">
                        Dados Pessoais
                    </VStepperItem>
                    <VDivider></VDivider>
                    <VStepperItem
                        :complete="stepComplete(1)"
                        step="2"
                        :color="stepStatus(1)">
                        Dados de Entrega
                    </VStepperItem>
                    <VDivider></VDivider>
                    <VStepperItem
                        :complete="stepComplete(2)"
                        step="3"
                        :color="stepStatus(2)">
                        Dados de Pagamento
                    </VStepperItem>
                </VStepperHeader>
        
                <VStepperWindow step="0" v-show="currStep === 0">
                    <FormPersonal v-model="steps[0].valid"/>
                    <VRow justify="space-between" class="spacing">
                        <VBtn @click="nextStep" :disabled="!steps[0].valid">Continuar</VBtn>
                    </VRow>
                </VStepperWindow>
        
                <VStepperWindow step="1" v-show="currStep === 1">
                    <FormDelivery v-model="steps[1].valid"/>
                    <v-row justify="space-between" class="spacing">
                        <VBtn @click="prevStep">Voltar</VBtn>
                        <VBtn @click="nextStep" :disabled="!steps[1].valid">Continuar</VBtn>
                    </v-row>
                </VStepperWindow>
        
                <VStepperWindow step="2" v-show="currStep === 2">
                    <FormPayment :paymentOptions="['bill', 'card', 'pix']"/>
                    <VRow justify="space-between" class="spacing">
                        <VBtn @click="prevStep">Voltar</VBtn>
                        <VBtn @click="nextStep" :disabled="!steps[2].valid">Finalizar Compra</VBtn>
                    </VRow>
                </VStepperWindow>
            </VStepper>
        </VCol>
    </VRow>
</template>

<style scoped>
.spacing { 
    padding: 1em;
}
</style>
