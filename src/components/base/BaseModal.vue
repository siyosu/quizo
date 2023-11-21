<script setup>
import { onClickOutside } from '@vueuse/core'
import { ref } from 'vue'
const emit = defineEmits(['close'])

const modal = ref(null)
onClickOutside(modal, () => {
  emit('close')
})
</script>
<template>
  <div
    class="fixed left-0 top-0 flex h-screen w-full items-center justify-center bg-black/10 px-6 dark:bg-transparent dark:backdrop-blur-[2px]"
  >
    <div ref="modal" class="max-w-lg">
      <slot><p>Hello World</p></slot>
    </div>
  </div>
</template>
