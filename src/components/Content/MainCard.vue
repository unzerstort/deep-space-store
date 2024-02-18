<script setup>
import { VMain, VContainer, VCard } from 'vuetify/components';
</script>

<script>
export default {
    
}
</script>

<template>
    <VMain>
        <VContainer>
            <VCard variant="tonal">
                <slot></slot>
            </VCard>
        </VContainer>     
    </VMain>
</template>

<style scoped>
</style>