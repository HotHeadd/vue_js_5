<template>
  <div>
    <p>Счёт: {{ count }}</p>

    <span @click="handleClick">
      <slot>Кликнуть</slot>
    </span>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  amount: { type: Number, default: 1 }
})

const emit = defineEmits(['button-clicked'])

const count = ref(0)

function handleClick() {
  count.value += props.amount
  emit('button-clicked')
}
</script>