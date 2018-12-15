<template>
  <div>
    <button @click="doSomething">AAAH</button>
    {{ thing }}
  </div>
</template>

<script>
  export default {
    data() {
      return {
        thing: true
      }
    },
    methods: {
      doSomething() {
        thing = !thing
      }
    },
  }
</script>

<style scoped>

</style>
