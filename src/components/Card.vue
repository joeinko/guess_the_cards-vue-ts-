<script setup lang="ts">
import {defineProps} from 'vue'
import {type Card} from "../utils/game.ts";

defineProps<{
  card: Card
}>()

</script>

<template>
  <div :class="`${card.color} card mx-1 flex flex-col`">
    <span class="text-bold text-2xl">{{card.value}}</span>
    <span>{{card.symbol}}</span>
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

.card > span:first-child {
  margin-bottom: -4px;
}
</style>
