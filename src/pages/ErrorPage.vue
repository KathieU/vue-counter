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
@import url('https://fonts.googleapis.com/css2?family=Lilita+One&display=swap');

    .error-page {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        background-color: #10002b;
        color: #e0aaff;
    }

    h1 {
        font-family: 'Lilita One', cursive;
        font-size: 12rem;
    }

    p {
        padding-top: 15px;
        padding-bottom: 15px;
        font-size: 1rem;
        color: #3c096c;
    }
</style>