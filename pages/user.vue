<template>
  <div class="mt-10 mx-auto mb-0 sm:mx-auto sm:mt-2 sm:px-4">
    <h1 class="text-2xl font-semibold mb-4">Nutzerinformation</h1>
    <div v-if="user.name.length">
      <p class="text-gray-700 user-info">Nachname: {{ user.name }}</p>
      <p class="text-gray-700 user-info">Vorname: {{ user.lastName }}</p>
      <p class="text-gray-700 user-info">Email: {{ user.email }}</p>
      <p class="text-gray-700 user-info">Geschlecht: {{ user.gender }}</p>
      <p class="text-gray-700 user-info">Nachricht: {{ user.note }}</p>
    </div>
    <p v-else class="text-gray-700 user-info">
      Keine Information. Bitte legen Sie neue Benutzerdaten fest.
    </p>
    <button
      v-if="user.name.length"
      type="button"
      class="inline-block rounded-full border px-11 py-1 btn-color mt-3"
      @click="resetUserData"
    >
      Daten zurücksetzen
    </button>
  </div>
</template>
<script lang="ts">
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
  methods: {
    resetUserData(): void {
      this.$store.dispatch('resetUser')
    },
  },
})
</script>

<style scoped>
.btn-color {
  border-color: #0fb1af;
  background-color: #0fb1af;
  color: #fff;
}

.btn-color:hover {
  border-color: #106463;
  background-color: #106463;
  transition: 0.5s ease;
}
</style>