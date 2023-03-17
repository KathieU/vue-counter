<template>
    <button :class="buttonClass" @click="$emit('click')">
        {{ buttonText }}
    </button>
</template>

<script>
export default {
    name: 'ButtonItem',
    props: {
        buttonClass: {
            type: String,
            default: ''
        },
        buttonText: {
            type: String,
            default: ''
        }
    }
}
</script>
    
<style scoped>

button {
  padding: 10px;
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