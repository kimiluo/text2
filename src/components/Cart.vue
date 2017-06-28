<template>
  <div class="uk">
    <h1>{{title}}</h1>
  </div>
</template>

<script>
  import nvHeader from './Header.vue'
  import nvFooter from './footer.vue'
  import nvButton from './button.vue'
  import nvCounter from './counter.vue'

  export default {
    name: 'hello',
    components: {
      nvHeader,
      nvFooter,
      nvButton,
      nvCounter
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js uk page',
        total: 0
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
</style>
