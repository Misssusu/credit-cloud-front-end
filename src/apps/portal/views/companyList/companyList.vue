<template>
    这是listpage
</template>
<script setup>
import { companyStore } from '../../../../stores/index'
const compStore = companyStore();

console.log('compStore----',compStore.companyList)
</script>
