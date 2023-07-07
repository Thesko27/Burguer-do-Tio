<template>
    <div id="main-banner">
       <h1>Make your Burger</h1>
    </div>
</template>

<script>
    export default {
        name: 'TheBanner',
    }
</script>

<style scoped>
#main-banner
{
    background: url("/img/burger.jpg") no-repeat;
    background-position: 0 -250px;
    background-size: cover;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
}
#main-banner h1
{
    color: #fff;
    text-align: center;
    font-size: 60px;
    background: #222;
    padding: 20px 40px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
}

</style>