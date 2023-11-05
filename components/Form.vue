<template>
  <div class="form-block items-center mt-10 mx-auto mb-0">
    <form @submit.prevent="submitForm">
      <div class="mb-6">
        <label
          for="name"
          class="label-field"
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
          class="label-field"
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
          class="label-field"
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
          pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
        />
      </div>

      <div>
        <label
          for="gender"
          class="label-field"
          >Geschlecht</label
        >
        <select
          id="gender"
          v-model="user.gender"
          name="gender"
          placeholder="Choose your gender"
          class="input-field"
        >
          <option value="MALE">Male</option>
          <option value="FEMALE">Female</option>
        </select>
      </div>

      <div class="mt-3 mb-3">
        <label
          for="note"
          class="label-field"
          >Nachricht</label
        >
        <textarea
          id="note"
          v-model="user.note"
          rows="4"
          class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-400 focus:border-blue-400"
          placeholder="Write your note here..."
          pattern=".{2,}"
          maxlength="150"
        ></textarea>
      </div>

      <div>
        <button
          type="button"
          class="inline-flex rounded-full justify-center items-center border px-11 py-1 bg-red-700 hover:bg-red-800"
          @click="resetForm"
        >
          Reset Form
        </button>
        <button
          :disabled="isSubmitting"
          type="submit"
          class="inline-flex rounded-full justify-center items-center border px-11 py-1 ml-3 btn-color"
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
  @apply bg-transparent border border-gray-300 rounded-md transition duration-300 w-full pl-2 pt-1 pb-1;
  color: black;
}
.label-field {
  @apply block mb-2 text-sm;
}


.button-field {
  @apply focus:outline-none text-white  focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2;
}

label {
  color: rgb(174, 174, 178);
}
button {
  color: #fff;
}
</style> 