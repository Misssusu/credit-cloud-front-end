<template>这是listpage</template>
<script setup>
import { companyStore } from '@portal/stores'
const compStore = companyStore()

console.log('compStore----', compStore.companyList)
</script>
