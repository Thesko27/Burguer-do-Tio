<template>
  <div class="main-container">
    <h1>Gerenciar Pedidos</h1>
    <TheDashboard />
  </div>
</template>

<script>
import TheDashboard from '../components/TheDashboard.vue'



export default {
  name: 'TheDashboard',
  components: {
    TheDashboard,
  }
}

</script>


<style scoped>
h1 {
  height: 100vh;
}
</style>
