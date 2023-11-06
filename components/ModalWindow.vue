<template>
  <div>
    <transition name="fade">
      <div
        v-if="isVisible"
        class="fixed inset-0 flex items-center justify-center z-50 sm:mx-4"
      >
        <div
          class="fixed inset-0 bg-gray-800 opacity-50"
          @click="closeModal"
        ></div>
        <div
          class="w-full max-w-lg p-3 relative mx-auto my-auto rounded-xl shadow-lg bg-white"
        >
          <div>
            <div class="text-center p-3 flex-auto justify-center leading-6 sm:p-1">
              <h2 class="text-2xl font-bold py-4">
                Hallo. Willkommen bei hokify!
              </h2>
            </div>
            <div class="p-3 mt-1 text-center space-x-4 md:block sm:mt-0">
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
    closeModal() {
      // @ts-ignore
      this.$emit('close-modal')
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
