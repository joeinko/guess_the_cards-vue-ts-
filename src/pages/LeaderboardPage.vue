<script setup lang="ts">
import {useStore} from "../store";
import {computed} from "vue";

const store = useStore();
const attempts = computed(() => store.$state.attempts);
</script>

<template>
  <h1 class="text-4xl m-4">Leaderboard</h1>
  <div class="flex flex-col justify-center">
    <template v-for="attempt in attempts">
      <span class="mb-2">attempt {{attempt.no}} - {{attempt.correct}} answers</span>
    </template>
    <RouterLink to="/game" class="btn">Play Again</RouterLink>
  </div>
</template>