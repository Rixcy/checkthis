<template>
  <div>
    <div class="flex flex-wrap">
      <div class="col-4">Hamburger</div>
      <div class="col-4">Hamburger</div>
      <div class="col-4">Hamburger</div>
      <div class="col-4">Hamburger</div>
      <div class="col-4">Hamburger</div>
    </div>
  </div>
</template>

<script>
export default {
  mounted: function () {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 2000)
    })
  }
}
</script>

<style>
</style>
