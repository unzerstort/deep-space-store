<script setup>
import { ref, reactive, onMounted } from 'vue';
import { VContainer, VForm, VTextField } from 'vuetify/components';
import { searchZipCode } from '@/components/Forms/ZipCodeValidation.js';

const props = defineProps({
    valid: Boolean
});

const emit = defineEmits(['update:modelValue']);

const form = ref(false);

const address = reactive({});
const zipCodeError = ref('');

const checkFormValidity = () => {
    if (!form.value) {
        emit('update:modelValue', false);
    } else {
        emit('update:modelValue', true);
    }
};

const getAddress = async (zipCode) => {
    let value = zipCode.target.value;

    if (searchZipCode(value)) {
        try {
            const response = await fetch(`https://viacep.com.br/ws/${value}/json/`);
            const data = await response.json();
            Object.assign(address, data); // Assign fetched data to the address reactive object
            zipCodeError.value = '';
            
        } catch (error) {
            console.error('Error fetching data: ', error);
            zipCodeError.value = 'Erro ao buscar CEP';
            Object.keys(address).forEach(key => delete address[key]);
        }
    } else {
        zipCodeError.value = 'CEP inválido';
        Object.keys(address).forEach(key => delete address[key]);
    }

    checkFormValidity();
};
</script>

<template>
    <VContainer>
        <VForm v-model="form" @submit.prevent="checkFormValidity">
            <VTextField 
                v-on:blur="getAddress" 
                label="CEP" 
                placeholder="Insira um CEP" 
                hint="Somente números" 
                persistent-hint
                :error-messages="zipCodeError"
                variant="outlined"
            ></VTextField>
            <VTextField 
                id="logradouro" 
                :model-value="address.logradouro" 
                v-if="address && address.logradouro" 
                label="Logradouro"
                variant="outlined"
            ></VTextField>
            <VTextField 
                id="bairro" 
                :model-value="address.bairro" 
                v-if="address && address.bairro" 
                label="Bairro"
                variant="outlined"
            ></VTextField>
            <VTextField 
                id="localidade" 
                :model-value="address.localidade" 
                v-if="address && address.localidade" 
                label="Cidade"
                variant="outlined"
            ></VTextField>
            <VTextField 
                id="uf" 
                :model-value="address.uf" 
                v-if="address && address.uf" 
                label="Estado" 
                variant="outlined"></VTextField>
            <VTextField 
                id="complemento" 
                label="Complemento" 
                variant="outlined"
            ></VTextField>
        </VForm>
    </VContainer>
</template>

<style scoped></style>
