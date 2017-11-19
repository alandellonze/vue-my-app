<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
	  <router-link to="/">HelloWorld (by url)</router-link>
  </div>
</template>

<script>
export default {
  name: 'Page2',
  data () {
    return {
      msg: 'Page2'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
