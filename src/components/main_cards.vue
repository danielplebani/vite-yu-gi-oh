<script>

import { state } from "../state.js";

export default{
  name: 'main_cards',

  data(){
    return{
        state
    }
  },

  created() {
  setTimeout(() => {
    state.connectAPI();
  }, 200);
  }
}
</script>


<template>
    <div class="container bg-white p-5" v-if="state.characters">
      <div class="found_cards p-3"><h5>Found {{Number(this.state.characters.length)}} cards</h5></div>

      <div class="d-flex justify-content-center flex-wrap gap-4">
        <div v-for="card in state.characters" class="card">
          <img :src="card.card_images[0].image_url" class="card-img-top">

          <div class="card-body px-3">
            <h5 class="card-title mb-4">{{card.name}}</h5>
            <p class="card-text">{{card.archetype}}</p>
          </div>
        </div>
      </div>
    </div>

    <div style="height: 88vh;" class="container bg-warning d-flex flex-column align-items-center justify-content-center" v-else>
      <div class="dot-spinner mb-5">
        <div class="dot-spinner__dot"></div>
        <div class="dot-spinner__dot"></div>
        <div class="dot-spinner__dot"></div>
        <div class="dot-spinner__dot"></div>
        <div class="dot-spinner__dot"></div>
        <div class="dot-spinner__dot"></div>
        <div class="dot-spinner__dot"></div>
        <div class="dot-spinner__dot"></div>
      </div>

        <h2>...loading...</h2>
    </div>
</template>


<style lang="scss" scoped>
@use '../color/color.scss' as *;
.found_cards{
  background-color: $founded-cards;
  color: white;
}

.card{
  width: calc(92.1% /5);
  border-radius: 0;
    .card-body{
      background-color: $main-bg;
      text-align: center;
      
        h5{
          color: white;
          text-transform: uppercase;
          font-size: large;
        }
    }
}

.dot-spinner {
  --uib-size: 300px;
  --uib-speed: .9s;
  --uib-color: black;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: var(--uib-size);
  width: var(--uib-size);
}

.dot-spinner__dot {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
}

.dot-spinner__dot::before {
  content: '';
  height: 20%;
  width: 20%;
  border-radius: 50%;
  background-color: var(--uib-color);
  transform: scale(0);
  opacity: 0.5;
  animation: pulse calc(var(--uib-speed) * 1.111) ease-in-out infinite;
}

.dot-spinner__dot:nth-child(2) {
  transform: rotate(45deg);
}

.dot-spinner__dot:nth-child(2)::before {
  animation-delay: calc(var(--uib-speed) * -0.875);
}

.dot-spinner__dot:nth-child(3) {
  transform: rotate(90deg);
}

.dot-spinner__dot:nth-child(3)::before {
  animation-delay: calc(var(--uib-speed) * -0.75);
}

.dot-spinner__dot:nth-child(4) {
  transform: rotate(135deg);
}

.dot-spinner__dot:nth-child(4)::before {
  animation-delay: calc(var(--uib-speed) * -0.625);
}

.dot-spinner__dot:nth-child(5) {
  transform: rotate(180deg);
}

.dot-spinner__dot:nth-child(5)::before {
  animation-delay: calc(var(--uib-speed) * -0.5);
}

.dot-spinner__dot:nth-child(6) {
  transform: rotate(225deg);
}

.dot-spinner__dot:nth-child(6)::before {
  animation-delay: calc(var(--uib-speed) * -0.375);
}

.dot-spinner__dot:nth-child(7) {
  transform: rotate(270deg);
}

.dot-spinner__dot:nth-child(7)::before {
  animation-delay: calc(var(--uib-speed) * -0.25);
}

.dot-spinner__dot:nth-child(8) {
  transform: rotate(315deg);
}

.dot-spinner__dot:nth-child(8)::before {
  animation-delay: calc(var(--uib-speed) * -0.125);
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(0);
    opacity: 0.5;
  }

  50% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>