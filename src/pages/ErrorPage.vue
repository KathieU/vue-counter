<template>
    <div class="error-page">
        <h1>Oops!</h1>
        <h2>404 - PAGE NOT FOUND</h2>
        <p>The page you are looking for might have been removed,<br />had its name changed or temporarily unavailable.</p>
        <button><router-link to="/" class="link-button">GO TO HOMEPAGE</router-link></button>
    </div>
</template>

<script>
    export default {};
</script>
    
<style scoped>
    .error-page {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }
</style>