<template>
  <div class="hello">
    <p>Name: {{ coin.name }}</p>
    <p>Symbol: {{ coin.symbol }}</p>
    <p>Price (USD): {{ coin.price_usd }}</p>

    <router-link to="/">go back</router-link>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'Coins',

    data () {
      return {
        coin: {}
      }
    },

    beforeRouteEnter (to, from, next) {
      axios.all([
        axios.get('https://api.coinmarketcap.com/v1/ticker/' + to.params.id + '/'),
        axios.get('https://api.coinmarketcap.com/v1/ticker/ethereum/')
      ]).then(axios.spread(function (result1, result2) {
        next((vm) => {
          console.log('result1:', result1.data[0])
          console.log('result2:', result2.data[0])
          vm.coin = result1.data[0]
        })
      }))
    }
  }
</script>
