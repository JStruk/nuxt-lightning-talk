<template>
    <div>
        <div v-if="pending">
            Loading...
        </div>
        <div v-else>
            <h1> Data Fetching yaaay</h1>
            <p> {{ data }}</p>

            <UsersTable :users='users' />

            <button @click="() => refresh()"> Refresh data </button>
        </div>

        <hr />
        <div>
            <span> Counter value is: {{ counter }}</span>
        </div>
    </div>
</template>

<script setup>

const {
    data: users,
    pending,
    refresh,
    errors
} = useLazyFetch('/api/users')

const counter = useState('counter', () => undefined);

</script>