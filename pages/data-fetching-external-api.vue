<template>
    <div>
        <h1> Data Fetching yaaay</h1>

        <div v-if="pending">
            Loading...
        </div>
        <div v-else>
            <table>
                <tr>
                    <th>#</th>
                    <th>Description</th>
                    <th>Completed</th>
                </tr>

                <tr v-for="(item, index) in data.listItems" :key="index">
                    <td> {{ item.id }}</td>
                    <td> {{ item.description }}</td>
                    <td> {{ item.completed }}</td>
                </tr>
            </table>
        </div>

        <div>
            <button @click="() => refresh()">Refresh Data</button>
        </div>

        <hr />
        <div>
            <span> Counter value is: {{ counter }}</span>
        </div>
    </div>
</template>

<script setup>

const { pending, data, refresh, errors } = useLazyFetch('https://list.api.jstruk.com/list?listId=bGqzZMj55ue7eVupPYM5')

const counter = useState('counter', () => undefined);

</script>

<style>
table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
}

td,
th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
}

tr:nth-child(even) {
    background-color: #dddddd;
}
</style>