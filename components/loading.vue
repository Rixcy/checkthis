<template>
  <transition name="fade">
    <div
      v-if="loading"
      class="preloader">
      <div class="loader">
        <span>{</span><span>}</span>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    data: () => ({
      loading: false
    }),
    methods: {
      start() {
        this.loading = true
      },
      finish() {
        this.loading = false
      }
    },
  }
</script>

<style scoped lang="scss">
$background-color: #af2b1e;
$loader-color: #fff;
$loader-size: 30vh;

.fade-leave-active, .fade-enter-active {
  transition: opacity, .5s;
}

.fade-leave-to {
  opacity: 0;
}

.fade-enter {
  opacity: 1;
}

.preloader {
  position: fixed;
  z-index: 200;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: $background-color;
  pointer-events: none;
}

.loader {
  color: #fff;

  font-family: Consolas, Menlo, Monaco, monospace;
  font-weight: bold;
  font-size: $loader-size;

  opacity: 0.8;

  span {
    display: inline-block;
    animation: pulse 0.4s alternate infinite ease-in-out;

    &:nth-child(odd) {
      animation-delay: 0.4s;
    }
  }
}

@keyframes pulse {
  to {
    transform: scale(0.8);
    opacity: 0.5;
  }
}
</style>
