<script setup lang="ts">
import {defineProps} from 'vue'

defineProps<{
  value: string
}>()

</script>

<template>
  <div :class="`bg-white card mx-1`">
    <span class="text-sm">{{value}}</span>
  </div>
</template>

<style scoped>
.card {
  padding: 32px;
  height: 32px;
  width: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
}
</style>
