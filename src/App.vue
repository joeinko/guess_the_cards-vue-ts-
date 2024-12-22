<script setup lang="ts">
import {RouterView, useRouter} from 'vue-router'

const router = useRouter();

router.push(
    '/'
    // '/game'
    // '/result'
    // '/leaderboard'
);
</script>

<template>
  <RouterView/>
</template>