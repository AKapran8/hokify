<template>
  <div class="form-block mt-10 mx-auto mb-0">
    <form @submit.prevent="submitForm">
      <div class="mb-6">
        <label
          for="name"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Vorname</label
        >
        <input
          id="name"
          v-model="user.name"
          type="text"
          name="name"
          autocomplete="on"
          class="input-field"
          required
          pattern=".{2,}"
        />
      </div>

      <div class="mb-6">
        <label
          for="last-name"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Nachname</label
        >
        <input
          id="last-name"
          v-model="user.lastName"
          type="text"
          name="last-name"
          autocomplete="on"
          class="input-field"
          required
          pattern=".{2,}"
        />
      </div>

      <div class="mb-6">
        <label
          for="email"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Email</label
        >
        <input
          id="email"
          v-model="user.email"
          type="email"
          name="email"
          autocomplete="email"
          class="input-field"
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}"
        />
      </div>

      <div>
        <label
          for="gender"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Geschlecht</label
        >
        <select
          id="gender"
          v-model="user.gender"
          name="gender"
          placeholder="Choose your gender"
          class="input-field"
        >
          <option>--NONE--</option>
          <option value="MALE">Male</option>
          <option value="FEMALE">Female</option>
        </select>
      </div>

      <div class="mt-3 mb-3">
        <label
          for="note"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Nachricht</label
        >
        <textarea
          id="note"
          v-model="user.note"
          rows="4"
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write your note here..."
          pattern=".{2,}"
          maxlength="150"
        ></textarea>
      </div>

      <div>
        <button
          type="button"
          class="button-field bg-red-700 hover:bg-red-800 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          @click="resetForm"
        >
          Reset Form
        </button>
        <button
          :disabled="isSubmitting"
          type="submit"
          class="button-field bg-green-700 hover:bg-green-800 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 ml-2"
        >
          Save Data
        </button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import { IUserData } from '~/models/user-data.model'

export default Vue.extend({
  data() {
    return {
      isSubmitting: false,
      user: {
        name: '',
        lastName: '',
        email: '',
        gender: '',
        note: '',
      } as IUserData,
    }
  },
  methods: {
    submitForm(): void {
      const isValid: boolean = this.validationChecker()

      if (!isValid) return

      this.$store.dispatch('createUser', this.user)
      this.resetForm()

      setTimeout(() => {
        console.log(this.$store.getters.getUser)
      }, 500)
    },

    validationChecker(): boolean {
      const { name, lastName, gender, email, note } = this.user

      const isNotEmpty = (value: string) => value.trim().length > 0
      const isEmailValid = (value: string) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        return emailRegex.test(value)
      }
      return (
        isNotEmpty(name) &&
        isNotEmpty(lastName) &&
        isNotEmpty(email) &&
        isNotEmpty(note) &&
        isNotEmpty(gender) &&
        isEmailValid(email)
      )
    },

    resetForm() {
      this.user = this.$store.getters.getEmptyUser
    },
  },
})
</script>

<style scoped>
.form-block {
  max-width: 500px;
  align-items: center;
}
.input-field {
  @apply bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500;
}

.button-field {
  @apply focus:outline-none text-white  focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2;
}
</style> 