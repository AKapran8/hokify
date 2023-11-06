<template>
  <header class="bg-header">
    <div class="container mx-auto p-3 flex justify-between">
      <NuxtLink to="/">
        <img src="./../static/logo.svg" class="h-9 inline-block" alt="Logo" />
      </NuxtLink>

      <div class="flex gap-3">
        <NuxtLink
          to="/user"
          exact-active-class="border-b-2"
          class="hover:border-b-2"
        >
          <p class="text-xl font-bold sm:text-sm">
            Benutzer/in
            <span v-if="user && user.name.length">{{ user.name }}</span>
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
  computed: {
    user() {
      return this.$store.getters.getUser
    },
  },
  methods: {
    toggleTheme(): void {
      document.body.classList.toggle('dark')
      const htmlElement = document.documentElement
      const currentTheme = htmlElement.getAttribute('data-theme')
      const newTheme = currentTheme === 'light' ? 'dark' : 'light'
      htmlElement.setAttribute('data-theme', newTheme)
      document.body.setAttribute('data-theme', newTheme)
    },
  },
})
</script>

<style scoped>
.bg-header {
  background: #0fb1af;
}

p,
span {
  color: #fff;
}

@media only screen and (max-width: 628px) {
  .form-block {
    margin-top: 1rem;
  }
  .form-block form {
    max-width: 80vw;
    margin: 0 auto;
  }

  .btn-actions {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .btn-color {
    margin: 0;
  }
}
</style>