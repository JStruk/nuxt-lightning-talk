<template>
    <table>
        <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
        </tr>

        <tr v-for="user in props.users" v-bind:key="user.index">
            <td>{{ user.index }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.phone }}</td>
        </tr>
    </table>
</template>

<script setup>
const props = defineProps({
    users: { type: Array, required: true }
})

console.log(props.users)
</script>
