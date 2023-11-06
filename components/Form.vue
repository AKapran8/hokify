<template>
  <div class="form-block items-center mt-10 mx-auto mb-0 sm:px-4 sm:mt-3">
    <form class="sm:mx-auto" @submit.prevent="submitForm">
      <div class="mb-6">
        <label for="name" class="label-field">Vorname</label>
        <input
          id="name"
          v-model="user.name"
          type="text"
          name="name"
          autocomplete="on"
          class="input-field"
          required
          placeholder="Vorname"
          pattern=".{2,}"
        />
      </div>

      <div class="mb-6">
        <label for="last-name" class="label-field">Nachname</label>
        <input
          id="last-name"
          v-model="user.lastName"
          type="text"
          name="last-name"
          autocomplete="on"
          class="input-field"
          required
          placeholder="Nachname"
          pattern=".{2,}"
        />
      </div>

      <div class="mb-6">
        <label for="email" class="label-field">Email</label>
        <input
          id="email"
          v-model="user.email"
          type="email"
          name="email"
          autocomplete="email"
          class="input-field"
          required
          placeholder="Email"
          pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
        />
      </div>

      <div>
        <label for="gender" class="label-field">Geschlecht</label>
        <select
          id="gender"
          v-model="user.gender"
          name="gender"
          placeholder="Ihr Geschlecht"
          class="input-field"
        >
          <option value="MALE">Male</option>
          <option value="FEMALE">Female</option>
        </select>
      </div>

      <div class="mt-3 mb-3">
        <label for="note" class="label-field">Nachricht</label>
        <textarea
          id="note"
          v-model="user.note"
          rows="4"
          class="textarea-field"
          placeholder="Ihre Nachricht..."
          pattern=".{2,}"
          maxlength="150"
        ></textarea>
      </div>

      <div class="mt-8 sm:mt-4 sm:flex sm:flex-col sm:gap-4">
        <button
          type="button"
          class="button-field bg-red-700 hover:bg-red-800"
          @click="resetForm"
        >
          Formular leeren
        </button>
        <button
          :disabled="isSubmitting"
          type="submit"
          class="button-field ml-3 btn-color sm:m-0"
        >
          Senden
        </button>
      </div>
    </form>
    <ModalWindow
      class="absolute top-40 z-3"
      :is-visible="isModalVisible"
      @close-modal="closeModal"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import { IUserData } from '~/models/user-data.model'

export default Vue.extend({
  data() {
    return {
      isSubmitting: false,
      isModalVisible: false,
      user: {
        name: 'qwe',
        lastName: 'qwe',
        email: 'qweqw@qweq.qwe',
        gender: 'MALE',
        note: 'Lorem',
      } as IUserData,
    }
  },
  methods: {
    submitForm(): void {
      const isValid: boolean = this.validationChecker()
      if (!isValid) return
      this.$store.dispatch('createUser', this.user)
      this.isModalVisible = true
      this.resetForm()
    },
    validationChecker(): boolean {
      const { name, lastName, gender, email, note } = this.user
      const isNotEmpty = (value: string) => value.trim().length > 0
      const isEmailValid = (value: string) => {
        const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/g
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
    resetForm(): void {
      this.user = this.$store.getters.getEmptyUser
    },
    closeModal() {
      this.isModalVisible = false
    },
  },
})
</script>

<style scoped>
.btn-color {
  border-color: #0fb1af;
  background-color: #0fb1af;
}

.btn-color:hover {
  border-color: #106463;
  background-color: #106463;
  transition: 0.5s ease;
}
.form-block {
  max-width: 400px;
}
.input-field {
  @apply bg-transparent border border-gray-300 rounded-md transition duration-300 w-full pl-2 pt-1 pb-1 text-black;
}
.label-field {
  @apply block mb-2 text-sm text-gray-400;
}

.button-field {
  @apply inline-flex rounded-full justify-center items-center border px-11 py-1  text-white;
}

.textarea-field {
  @apply block bg-transparent p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-400 focus:border-blue-400;
}
</style>
