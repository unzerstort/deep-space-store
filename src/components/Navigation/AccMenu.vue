<script setup>


</script>

<script>
export default {

    data: () => ({

        items: [
            { title: 'Seus pedidos' },
            { title: 'Lista de desejos' },
            { title: 'Configurações' },
            { title: 'Sair da conta' },
        ],
    })

}
</script>

<template>
    <VMenu
        transition="slide-y-transition"
    >
        <template v-slot:activator="{ props }">
            <VBtn
                color="primary"
                v-bind="props"
            >
                Sua Conta
            </VBtn>
        </template>

        <VList>
        <VListItem
            v-for="(item, i) in items"
            :key="i"
        >
            <VListItemTitle>{{item.title }}</VListItemTitle>
        </VListItem>
        </VList>
    </VMenu>
</template>