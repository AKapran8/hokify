<template>
  <div class="inline-block">
    <label class="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" class="sr-only peer" @change="toggleTheme" />
      <div
        class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
      ></div>
      <span class="ml-3 text-sm font-medium text-white sm:text-xs"
        >Dunkles Thema</span
      >
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ThemeToggler',
  methods: {
    toggleTheme() {
      this.$emit('toggle-theme')
    },
  },
})
</script>
