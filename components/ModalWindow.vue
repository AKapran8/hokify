<template>
  <div>
    <transition name="fade">
      <div v-if="isVisible" class="bg-black">
        <div
          class="w-full max-w-lg p-3 relative mx-auto my-auto rounded-xl shadow-lg bg-white"
        >
          <div>
            <div class="text-center p-3 flex-auto justify-center leading-6">
              <h2 class="text-2xl font-bold py-4">
                Hallo. Willkommen bei hokify!
              </h2>
            </div>
            <div class="p-3 mt-1 text-center space-x-4 md:block">
              <button
                class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-md hover:shadow-lg hover:bg-gray-100"
                @click="closeModal"
              >
                Ok
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    isVisible: Boolean,
  },
  data() {
    return {}
  },
  methods: {
    closeModal(): void {
      this.$emit('close')
    },
  },
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 500ms ease-out;
}
</style>
