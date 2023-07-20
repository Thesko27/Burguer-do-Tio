<template>
  <TheBanner />
  <div class="main-container">
    <h1>Monte o seu burger:</h1>
    <BurguerForm />
  </div>
</template>

<script >
import TheBanner from '../components/TheBanner.vue';
import BurguerForm from '../components/BurguerForm.vue';

export default {
  name: 'HomeView',
  components: {

    TheBanner,
    BurguerForm

  }
}

</script>

