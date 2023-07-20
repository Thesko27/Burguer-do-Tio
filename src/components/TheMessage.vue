<template>
    <div class="message-container">
        <p>{{ msg }}</p>
    </div>
</template>

<script>
export default {
    name: "TheMessage",
    props: {
        msg: String
    },
}
</script>

<style scoped>
.message-container {
    border: 1px solid #b8daff;
    background: #cce5ff;
    color: #004085;
    border-radius: 5px;
    padding: 10px;
    max-width: 400px;
    margin: 30px auto;

}
</style>