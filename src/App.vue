<script setup lang="ts">
import {RouterView, useRouter} from 'vue-router'

const router = useRouter();

router.push('/');
</script>

<template>
  <RouterView/>
</template>