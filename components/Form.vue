<template>
  <div class="form-block mt-10 mx-auto mb-0">
    <form @submit.prevent="submitForm">
      <div class="mb-6">
        <label
          for="name"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Name</label
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
          >Last Name</label
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
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        />
        <span
          class="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block"
        >
          Please enter a valid email address
        </span>
      </div>

      <div>
        <label
          for="gender"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Select an option</label
        >
        <select
          id="gender"
          v-model="user.gender"
          name="gender"
          placeholder="Choose your gender"
          class="input-field"
        >
          <option>--NONE--</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      <div class="mt-3 mb-3">
        <label
          for="note"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Your message</label
        >
        <textarea
          id="note"
          v-model="user.note"
          rows="4"
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write your note here..."
          maxlength="150"
        ></textarea>
      </div>

      <div>
        <button
          type="button"
          @click="resetForm"
          class="button-field bg-red-700 hover:bg-red-800 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
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

interface IUser {
  name: string
  lastName: string
  email: string
  gender: string
  note?: string
}

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
      } as IUser,
    }
  },
  methods: {
    submitForm(): void {
      const isValid: boolean = this.validationChecker()

      if (!isValid) return

      console.log(this.user)
    },

    validationChecker(): boolean {
      const { name, lastName, gender, email } = this.user

      const isNotEmpty = (value: string) => value.trim().length > 0
      const isEmailValid = (value: string) => {
        const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/
        return emailRegex.test(value)
      }

      return (
        isNotEmpty(name) &&
        isNotEmpty(lastName) &&
        isNotEmpty(email) &&
        isNotEmpty(gender) &&
        isEmailValid(email)
      )
    },

    resetForm(): void {
      this.user.name = ''
      this.user.lastName = ''
      this.user.email = ''
      this.user.gender = ''
      this.user.note = ''
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