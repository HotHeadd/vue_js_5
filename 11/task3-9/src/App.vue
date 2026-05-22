<template>
  <Clicker
    v-for="n in 100"
    :key="n"
    :amount="1"
    @button-clicked="handleClick(n)"
  >
    <button>Кликнуть</button>
  </Clicker>
</template>

<script setup>
import Clicker from './Clicker.vue'

function handleClick(n) {
  alert(`Clicker ${n} clicked!`)
}
</script>