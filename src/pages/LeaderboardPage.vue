<script setup lang="ts">
import {useStore} from "../store";
import {computed} from "vue";

const store = useStore();
const attempts = computed(() => store.$state.attempts);
</script>

<template>
  <div>
    <h1 class="text-4xl mt-32 mb-8">Leaderboard</h1>
    <div v-for="attempt in attempts" class="flex flex-col">
      <span class="mb-2">attempt {{attempt.no}} - {{attempt.correct}} answers</span>
    </div>
  </div>
  <RouterLink to="/game" class="btn">Play Again</RouterLink>
</template>