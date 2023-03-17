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
    header {
        background-color: aqua;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-left: 2%;
        padding-right: 2%;
        height: 15vh;
        
    }
    

    button {
        padding: 20px;
        border: none;
        border-radius: 5px;
        color: #fff;
        background-color: #333;
        cursor: pointer;
        
    }

    button:hover {
        background-color: #555;
    }
</style>