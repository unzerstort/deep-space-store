<script setup>
import { ref } from 'vue'

const drawer = ref(null)

</script>
        
<script>
export default {
    data: () => ({ drawer: null }),
}
</script>

<template>
    <VNavigationDrawer v-model="drawer" location="right">
        <VListItem title="Minha conta" subtitle="Fulana da Silva">
            <VAvatar color="surface-variant"></VAvatar>
        </VListItem>
        <VDivider></VDivider>
        <VListItem></VListItem>
    </VNavigationDrawer>

    <VAppBar>
        <VAppBarTitle text="Deep Space Store"></VAppBarTitle>

        <VResponsive max-width="200">
            <VTextField
                density="compact"
                flat
                hide-details
                label="Busca"
                rounded="lg"
                single-line
                variant="solo-filled"
            ></VTextField>
        </VResponsive>

        <VAppBarNavIcon @click="drawer = !drawer"></VAppBarNavIcon>

    </VAppBar>
</template>

<style scoped>
</style>