<template>
    <div>
        <nav-block :buttonText="'Home'" :routeName="'Home'"/>
        <div class="page-content">
            <p> {{ count }}</p>
            <div class="counter">
                <button @click="increment">+</button>
                <button @click="reset">Reset</button>
                <button @click="decrement">-</button>
            </div>
            
            <div class="set-value">
                <input type = "number" v-model="value" />
                <button @click="setValue">Set Value</button>
            </div>
        </div>
        <footer-block />
    </div>
</template>

<script>
    import useCounter from "@/composable/useCounter";
    import NavBlock from '@/components/NavBlock.vue';
    import FooterBlock from "@/components/FooterBlock.vue";

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
        components:{
            NavBlock,
            FooterBlock
        },
    };

</script>

<style scoped>
    .counter {
        display: flex;
    }

    p {
        font-size: 50px;
    }

    .set-value {
        padding-top: 20px;
    }

    .set-value input {
        background-color: #10002b;
        border-radius: 10px;
        padding: 10px;
        color: #5a189a;
        font-size: 20px;
    }
</style> -->


