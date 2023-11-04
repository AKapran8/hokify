<template>
  <div>
    <Header />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

interface Main {
  age: number;
  name: string;
}
export default Vue.extend({
  name: 'IndexPage',
  age: 25,
} as Main)
</script> 