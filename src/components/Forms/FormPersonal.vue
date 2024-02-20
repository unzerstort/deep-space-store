<script setup>
import { ref } from 'vue';
import { VContainer, VForm, VTextField } from 'vuetify/components';

const props = defineProps({
  valid: Boolean
});

const emit = defineEmits(['update:modelValue']);

const form = ref(false);

const fullName = ref('');
const email = ref('');
const phone = ref('');

const rules = {
    required: v => !!v || 'Campo é obrigatório',
    fullName: v => (v && v.length <= 30) || 'Nome deve ter no máximo 30 caracteres',
    email: v => /.+@.+\..+/.test(v) || 'E-mail deve ser válido',
    phone: v => /^\(?\d{2}\)? ?\d{4,5}-?\d{4}$/.test(v) || 'Telefone com DDD inválido',
};

const checkFormValidity = () => {
  if (!form.value) {
    emit('update:modelValue', false);
  } else {
    emit('update:modelValue', true);
  }
};
</script>

<template>
    <VContainer>
        <VForm v-model="form" @submit.prevent="checkFormValidity">
            <VTextField 
                label="Nome completo"
                variant="outlined"
                v-model="fullName"
                :rules="[rules.required, rules.fullName]"
                @blur="checkFormValidity"
            ></VTextField>
            <VTextField 
                label="E-mail" 
                placeholder="johndoe@gmail.com" 
                type="email"
                variant="outlined"
                v-model="email"
                :rules="[rules.email]"
                @blur="checkFormValidity"
            ></VTextField>
            <VTextField 
                label="Telefone" 
                required
                variant="outlined"
                v-model="phone"
                :rules="[rules.required, rules.phone]"
                @blur="checkFormValidity"
            ></VTextField>
        </VForm>
    </VContainer>
</template>
