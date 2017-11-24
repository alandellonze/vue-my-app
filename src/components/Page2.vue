<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <df-form :templates="templates" :onSubmit="onSubmit" />
  </div>
</template>

<script>
export default {
  name: 'Page2',
  data () {
    return {
      msg: 'Page2',
      templates: [
        {
          type: 'text',
          value: 'value text',
          maxLength: '10',
          required: true
        }, {
          type: 'text',
          value: 'value text 2'
        }, {
          type: 'textarea',
          value: 'value textarea',
          maxLength: '20'
        }, {
          type: 'image',
          value: 'http://www.tutorialsavvy.com/wp-content/uploads/2015/10/image_thumb23.png'
        }
      ]
    }
  },

  methods: {
    onSubmit () {
      this.templates.map(function (template) {
        console.log(template.type + ', ' + template.value)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
