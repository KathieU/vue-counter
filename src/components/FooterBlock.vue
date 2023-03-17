<template>
    <footer>
        Copyright &copy;{{ currentYear }} Catherine Udoh. All Rights reserved
    </footer>
</template>

<script>
export default {
    name: 'FooterBlock',
    data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
}
</script>

<style scoped>
    footer {
        display: flex;
        position:fixed;
        bottom:0;
        background-color: aqua;
        width: 100%;
        justify-content: center;
        align-items: center;
        height: 15vh;
    }
</style>