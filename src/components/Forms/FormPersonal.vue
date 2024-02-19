<script setup>
import { VContainer, VForm, VRow, VCol, VTextField } from 'vuetify/components';
import { ref } from 'vue';

const props = defineProps({
    fullName: String,
    email: String,
    phone: String
});

const ruleFullName = {
    fullName: [v => !!v || 'Nome completo é obrigatório'],
}

const ruleEmail = {
    email: [  
        v => /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()\\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) ||  'E-mail precisa ser válido'
    ],
}

const rulePhone = {
    phone: [
        v => !!v || 'Telefone é obrigatório',
        v => /^\(?\d{2}\)? ?\d{4,5}-?\d{4}$/.test(v) || 'Telefone com DDD inválido'
    ]
}

const fullName = ref(props.fullName);
const email = ref(props.email);
const phone = ref(props.phone);

</script>

<template>
    <VForm lazy-validation>
        <VTextField 
            label="Nome completo"
            variant="outlined"
            v-model="fullName"
            :rules="ruleFullName"
        ></VTextField>
        <VRow>
            <VCol cols="6">
                <VTextField 
                    label="E-mail" 
                    placeholder="fulanadasilva@gmail.com" 
                    type="email"
                    variant="outlined"
                    v-model="email"
                    :rules="ruleEmail"
                ></VTextField>
            </VCol>

            <VCol cols="6">
                <VTextField 
                    label="Telefone" 
                    required
                    variant="outlined"
                    v-model="phone"
                    :rules="rulePhone"
                ></VTextField>
            </VCol>
        </VRow>
    </VForm>
</template>

<style scoped>
</style>