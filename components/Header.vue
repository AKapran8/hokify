<template>
  <header class="bg-header">
    <nav class="container mx-auto p-3 flex justify-between">
      <NuxtLink to="/" >
        <img src="./../static/logo.svg" class="h-9 inline-block" alt="Logo">
      </NuxtLink>
      <ul class="flex gap-4">
        <li class="cursor-pointer text-white hover:border-b-4 font-bold transition-transform duration-300">
          <NuxtLink to="/">Form</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style>
.bg-header {
  background: #0fb1af;
}
</style>