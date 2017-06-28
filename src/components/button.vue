<template>
    <button v-on:click="counter += 1">{{counter}}</button>
</template>

<script>
export default {
  name: 'button',
  props: {
    title: String
  },
  data () {
    return {
      msg: 'button here',
      counter: 0
    }
  }
//  data必须是函数
//  return返回的是对象
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
