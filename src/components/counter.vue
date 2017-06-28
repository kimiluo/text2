<template>
  <div id="counter">
    <h1 v-text="title"></h1>
    <ul>
      <li v-for="item in items" :class="{finished: item.isFinished}">
        {{item.lable}}
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        title: 'this is to do list',
        items: [
          {
            lable: 'coding',
            isFinished: false
          },
          {
            lable: 'walking',
            isFinished: true
          }
        ],
        liClass: 'thisisLiClass'
      }
    }
//    mehtods: {
//      todoList: function (item) {
//        item.isFinished = !item.isFinished
//      }
//    }
  }
</script>
<style scoped>
  p {
    color: pink;
    font-size: 20px;
  }
  .finished {
    color: green;
  }
</style>

