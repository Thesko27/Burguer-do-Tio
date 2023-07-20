<template>
    <div id="nav">

        <RouterLink to="/" id="logo_url">
            <img :src="logo" alt="alt" id="logo">
        </RouterLink>

        <RouterLink to="/">Home</RouterLink>


    </div>
</template>

<script>

export default {
    name: "NavBar",
    props: ["logo", "alt"]
}

</script>

<style scoped>
#nav {
    background-color: #222;
    border-bottom: 4px solid #111;
    padding: 15px 50px;
    display: flex;
    justify-content: flex-end;
    align-items: center;

}

#nav #logo_url {
    margin: auto;
    margin-left: 0;

}

#logo {
    width: 60px;
}

#nav a {
    text-decoration: none;
    color: #fcba03;
    font-size: large;
    transition: .3s ease-in-out;
    cursor: pointer;
    margin: 12px;

}

#nav a:hover {
    color: #fff;
}
</style>