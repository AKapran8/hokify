<template>
  <header class="bg-header">
    <div class="container mx-auto p-3 flex justify-between">
      <NuxtLink to="/">
        <img src="./../static/logo.svg" class="h-9 inline-block" alt="Logo" />
      </NuxtLink>

      <div class="flex gap-3">
        <NuxtLink to="/user" exact-active-class="border-b-2">
          <p
            class="text-xl hover:border-b-2 font-bold"
          >
            User
          </p>
        </NuxtLink>

        <ThemeToggler @toggle-theme="toggleTheme" />
      </div>
    </div>
  </header>
</template>
<script  lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'HeaderComponent',
  data() {
    return {}
  },
  methods: {
    toggleTheme(): void {
      document.body.classList.toggle('bg-black')
      document.body.classList.toggle('text-white')
    },
  },
})
</script>

<style scoped>
.bg-header {
  background: #0fb1af;
}

p {
  color: #fff
}
</style>