<template>
  <div class="uk">
    <nv-header :title="'123'"></nv-header>
    <h1>{{ msg }}</h1>
    <h1>uk</h1>
    <nv-button></nv-button>
    <nv-button></nv-button>
    <nv-button></nv-button>
    <nv-button></nv-button>
    <nv-counter></nv-counter>
    <nv-footer :title="'zyw'" message="I am message">
      <p slot="footer" class="slot-p">我是footer的slot插槽</p>
    </nv-footer>
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

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
  .slot-p {
    color: #fff;
    background: #e3eaee;
    line-height: 30px;
  }
</style>
