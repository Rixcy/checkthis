<template>
  <div id="stuff">
    {{ users }}
    <div
      v-for="(user, key) in users"
      :key="key">
      {{ user }}
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState([
    'users'
  ])
}
</script>
