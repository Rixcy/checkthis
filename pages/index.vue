<template>
  <div class="container mx-auto p-4">
    <div id="example-4">
      <button @click="show = !show">
        Toggle
      </button>

      <div v-if="show">
        <transition-group
          :key="index"
          tag="ul"
          enter-active-class="animated slideInDown"
          leave-active-class="animated slideOutUp">
          <li
            v-for="item in items"
            :key="item">
            {{ index }}
            {{ item.message }}
          </li>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false,
      items: [
        { message: 'Foo' },
        { message: 'Bar' }
      ]
    }
  },
}
</script>
