<script setup>
import { ref } from 'vue';
import { VStepper, VStepperHeader, VStepperItem, VStepperWindow, VDivider, VBtn } from 'vuetify/components';
import MainCard from './MainCard.vue';
import FormPersonal from '../Forms/FormPersonal.vue';
import FormDelivery from '../Forms/FormDelivery.vue';
import FormPayment from '../Forms/FormPayment.vue';

const curr = ref(0);
const lastStep = 3;
const steps = [
    { name: "Dados Pessoais", valid: true },
    { name: "Dados de Entrega", valid: true },
    { name: "Dados de Pagamento", valid: true },
];

// const valid = ref(false);
// const stepForm = [];

// const stepComplete = (step) => curr.value > step;

// const stepStatus = (step) => curr.value > step ? "green" : "blue";

// const validate = (n) => {
//     steps[n].valid = false;
//     let v = stepForm[n].validate();
//     if (v) {
//         steps[n].valid = true;
//         // continue to next
//         curr.value = n + 2;
//     }
// };

// const done = () => {
//     curr.value = 5;
// };

</script>

<template>
    <FormPersonal 
        :rules="steps[0].valid"
    ></FormPersonal>
    <!-- <VStepper v-model="curr" color="green" alt-labels>
        <VStepperHeader class="overflow-x-auto">
            <template v-for="(step,n) in steps" :key="n">
                <VStepperItem
                    :complete="stepComplete(n+1)"
                    :step="n+1"
                    :rules="[value => !!step.valid]" 
                    :color="stepStatus(n+1)">
                    {{ step.name }}
                </VStepperItem>
                <VDivider
                    v-if="n !== steps"
                    :key="n"
                ></VDivider>
            </template>
        </VStepperHeader>

        <VStepperWindow v-for="(step,n) in steps" :step="n+1" :key="n">
            {{ step.name }}

            <FormPersonal 
                v-if="step.name == 'Dados Pessoais'"
                :ref="'stepForm'"
                lazy-validation
                :rules="rules"
            ></FormPersonal>

            <v-btn v-if="n+1 < lastStep" color="primary" @click="validate(n)" :disabled="!step.valid">Continue</v-btn>
            <v-btn v-else color="success" @click="done()">Done</v-btn>
            <v-btn text @click="curr = n">Back</v-btn>
        </VStepperWindow>
    </VStepper> -->
</template>