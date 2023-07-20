<template>
  <NavBar :logo="logo_src" :alt="app_name" />
  <RouterView />
  <TheFooterVue />
</template>



<script>
import NavBar from './components/NavBar.vue';
import TheFooterVue from './components/TheFooter.vue';


export default {
  name: 'App',
  data() {
    return {
      logo_src: '/img/logo.png',
      app_name: 'Make your Burger'
    }
  },
  components: {
    NavBar,
    TheFooterVue

  }
}

</script>



<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: monospace;
}

.main-container {
  margin: 50px;
  min-width: 250px;


}

h1 {
  text-align: center;
  font-size: 42px;
  margin-bottom: 30px;
  color: #222;
}
</style>
