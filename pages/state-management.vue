<template>
    <div>
        <h1> StateManagement... hello React? o.O</h1>

        <div>
            Counter: {{ counter }}
            <button @click="counter++">
                +
            </button>
            <button @click="counter--">
                -
            </button>
        </div>

        <hr />
        <div>
            <span>foo state: {{ foo }}</span>
        </div>
        <div>
            <span>bar state: {{ bar }}</span>
        </div>
    </div>
</template>

<script setup>
const counter = useState('counter', () => Math.round(Math.random() * 1000))

const foo = useFoo();
const bar = useBar();
</script>