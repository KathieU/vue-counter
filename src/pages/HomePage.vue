<template>
    <div>
        <nav-block :buttonText="'Counter'" :routeName="'Counter'"/>
        <div class="page-content">
            <h2>Welcome to the ClickCounter App</h2>
            <p>Click to increase, decrease and set values of your choice</p>
            <p>Click the button below to begin</p>
            <button><router-link to="/counter" class="link-button">Counter</router-link></button>
        </div>
        <footer-block />
    </div>
</template>

<script>

import NavBlock from '@/components/NavBlock.vue';
import FooterBlock from '@/components/FooterBlock.vue';

    export default {
        components:{
            NavBlock,
            FooterBlock
        },  
    };
</script>

<style scoped>
    
    h2 {
        font-size: 50px;
    }
    

    

</style>