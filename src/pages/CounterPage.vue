<template>
    <div>
        <h1>Counter page</h1>
        <router-link to="/">Home</router-link>
        <p>Count: {{ count }}</p>
        <button @click="increment">Increment</button>
        <button @click="decrement">Decrement</button>
        <button @click="reset">Reset</button>
        <div>
            <input type = "number" v-model="value" />
            <button @click="setValue">Set Value</button>
        </div>
    </div>
</template>

<script>
    import useCounter from "@/composable/useCounter";

    export default {
        setup() {
            const { count, increment, decrement, reset, value, setValue } = useCounter();

            return {
                count,
                increment,
                decrement,
                reset,
                value,
                setValue,
            };
        },
    };

</script>

<style scoped>

</style> -->


