<template>
  <TheBanner/>
  <div class="main-container">
    <h1>Monte o seu burger:</h1>
    <BurgerForm/>
  </div>
</template>

<script >
import TheBanner from '../components/TheBanner.vue';
import BurgerForm from '../components/BurgerForm.vue';

export default{
  name:'HomeView',
  components: {

    TheBanner,
    BurgerForm

  }
}

</script>

