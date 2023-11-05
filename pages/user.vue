<template>
  <div class="mt-10 mx-auto mb-0">
    <h1 class="text-2xl font-semibold mb-4">Information</h1>
    <p class="text-gray-700">Nachname: {{ user.name }}</p>
    <p class="text-gray-700">Vorname: {{ user.lastName }}</p>
    <p class="text-gray-700">Email: {{ user.email }}</p>
    <p class="text-gray-700">Geschlecht: {{ user.gender }}</p>
    <p class="text-gray-700">Nachricht: {{ user.note }}</p>
  </div>
</template>
<script>
import Vue from 'vue'

export default Vue.extend({
  layout: 'default',
  data() {
    return {}
  },
  computed: {
    user() {
      return this.$store.getters.getUser
    },
  },
})
</script>