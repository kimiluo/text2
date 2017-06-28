<template>
  <div class="hello">
    <h1>{{ msg + '-------' + title }}</h1>
    <h1>footer component</h1>
    <span>{{message}}</span>
    <slot name="footer">我是footer备用内容</slot>
  </div>
</template>

<script>
export default {
  name: 'hello',
  props: {
    title: String,
    message: String
  },
  data () {
    return {
      msg: 'footer here'
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
</style>
