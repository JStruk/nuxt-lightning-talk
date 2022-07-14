<template>
    <div>
        <h1> Data Fetching yaaay</h1>
        <p> {{ data }}</p>

        <UsersTable :users='users' />

        <hr />
        <div>
            <span> Counter value is: {{ counter }}</span>
        </div>
    </div>
</template>

<script setup>

const { pending, data: users, refresh, errors } = useLazyFetch('/api/users')

const counter = useState('counter');

</script>