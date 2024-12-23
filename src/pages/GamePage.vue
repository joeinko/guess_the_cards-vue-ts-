<script setup lang="ts">
import Card from '../components/Card.vue';
import {getHand, getOptions, resolveHand} from "../utils/game.ts";
import {ref, watch} from "vue";
import {useStore} from "../store";
import {useRouter} from "vue-router";

const store = useStore();
const router = useRouter();

const time = ref(100);
const isPlaying = ref(true);
const message = ref('');

const hand = ref<string[]>([]);
const options = ref<string[]>([]);
const result = ref('');

let interval: number;
const intervalHandler = () => {
  if (time.value >= 0 && isPlaying.value) {
    time.value--;
  }
}

const startRound = () => {
  hand.value = getHand();
  result.value = resolveHand(hand.value);
  options.value = getOptions(result.value);
  isPlaying.value = true;
  interval = setInterval(intervalHandler, 1000)
  console.log(result.value);
}

startRound();

const evalOption = (option: string) => {
  if (option === result.value) {
    store.incrementCorrect();
    message.value = 'You gain 5s';
    time.value += 5;
  } else {
    message.value = 'You lose 10s';
    time.value -= 10;
  }
  isPlaying.value = false;
  clearInterval(interval);
  setTimeout(() => startRound(), 2000);
}

watch(time, (newTime) => {
  if (newTime <= 0) {
    store.endGame();
    router.push('/leaderboard');
  }
})

</script>

<template>
  <template v-if="isPlaying">
    <div class="flex flex-row justify-end items-center my-4">
      <img alt="time" src="@/assets/health.svg">
      <span class="text-3xl mx-2 w-16">{{time}}s</span>
    </div>

    <div class="my-8">
      <div class="flex flex-row justify-center">
        <template v-for="card in hand">
          <Card :value="card"/>
        </template>
      </div>
    </div>

    <div class="my-4">
      <div class="flex flex-col justify-center">
        <template v-for="option in options">
          <button @click="evalOption(option)">{{option}}</button>
        </template>
      </div>
    </div>
  </template>

  <template v-else>
    <h1 class="m-4">Result</h1>
    <span class="text-2xl">{{message}}</span>
  </template>
</template>