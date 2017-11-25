<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <router-link :to="{ name: 'Page2' }">Page2 (by name)</router-link>
    <router-link to="/page2">Page2 (by url)</router-link>
    <br />
    <router-link to="/coins/bitcoin">Coins bitcoin (by url)</router-link>
    <router-link to="/coins/ethereum">Coins ethereum (by url)</router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
