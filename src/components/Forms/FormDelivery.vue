<script setup>
import { VContainer, VForm, VTextField } from 'vuetify/components';
import { searchZipCode } from '@/components/Forms/ZipCodeValidation.js';

</script>

<script>

export default {

    data: () => ({
        address: {},
        zipCodeError: '',
    }),

    methods: {
        getAddress(zipCode) {
            let value = zipCode.target.value;

            if (searchZipCode(value)) {
                fetch(`https://viacep.com.br/ws/${value}/json/`)
                    .then(response => response.json())
                    .then(data => {
                        this.address = data;
                        this.zipCodeError = ''
                    })
                    .catch(error => console.error('Error fetching data: ', error));
            } else {
                this.zipCodeError = 'CEP inválido';
                this.address = {};
            }
        }
    }

}

</script>

<template>
    <VContainer>
        <VForm>
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