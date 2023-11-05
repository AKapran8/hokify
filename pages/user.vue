<template>
  <div>
    <Header />
    {{ user.name || 'NAME' }}
    {{ user.LastName }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {}
  },
  computed: {
    user() {
      console.log('this.$store.getters.getUser ', this.$store.getters.getUser)
      return this.$store.getters.getUser
    }
  }
})
</script>