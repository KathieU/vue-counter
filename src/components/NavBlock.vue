<template>
    <header>
        <h1>ClickCounter</h1>
        <button @click="handleClick">
            {{ buttonText }}
        </button>   
    </header>
</template>

<script>

export default {
        name: 'NavBlock',
        props: {
            buttonText: {
                type: String,
                default: ''
            },
            routeName: {
                type: String,
                default: 'Home'
            }
        },

    methods: {
        handleClick() {
            this.$router.push({ name: this.routeName })
        }
    }
    
}
</script>
    
<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Oleo+Script&display=swap');
    header {
        background-color: #240046;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-left: 2%;
        padding-right: 2%;
        height: 15vh;
        color: #5a189a;
    }
    
    button {
        padding: 10px;
        border: none;
        border-radius: 15px;
        color: #5a189a;
        background-color: #10002b;
        cursor: pointer;
        font-size: 20px;
    }

    button:hover {
        background-color: #3c096c;
    }

    h1 {
        font-family: 'Oleo Script', cursive;
    }
    
</style>