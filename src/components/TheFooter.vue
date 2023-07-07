<template>
   <footer id="footer">
    <p>Make Your Burger &copy; 2023</p>
   </footer>
</template>

<script>
    export default {
        name: 'TheFooter',
    }
</script>

<style scoped>
#footer{
    background-color:#222;
    color:#fcba03;
    width: 100%;
    height: 200px;
    text-align: center;
    border-top:4px solid #111;
    display: flex;
    justify-content:center ;
    align-items: center;
    bottom: 0;

}
</style>