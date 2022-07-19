<template>
  <div>
    <h1>NuxtJS 3 Lightning Talk</h1>

    <div>
      <NuxtLink to="/data-fetching-nitro-api">Data Fetching from Nitro API</NuxtLink>
    </div>
    <div>
      <NuxtLink to="/data-fetching-external-api">Data Fetching from external API</NuxtLink>
    </div>
    <div>
      <NuxtLink to="/state-management">State Management</NuxtLink>
    </div>
    <div>
      <NuxtLink to="/head-management"> Head management </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const router = useRouter();

</script>