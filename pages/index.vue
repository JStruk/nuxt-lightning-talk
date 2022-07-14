<template>
<div>
    <h1>NuxtJS 3 Lightning Talk</h1>

    <NuxtLink to="/data-fetching">Data Fetching</NuxtLink>
    <!-- <button @click="dataFetchingButtonClicked"> Data Fetching </button> -->
    <NuxtLink to="/state-management">State Management</NuxtLink>
    <NuxtLink to="/head-management"> Head management </NuxtLink>

  </div>
</template>

<script setup>
const router = useRouter();

</script>