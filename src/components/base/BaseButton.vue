<script setup>
defineProps({
  variant: {
    type: String,
    default: 'primary'
  },
  loading: {
    type: Boolean,
    default: false
  },
  spinner: {
    type: Boolean,
    default: false
  }
})

const variantsClass = {
  primary: 'bg-primary text-primary-foreground hover:bg-primary/70',
  border: 'bg-background border hover:bg-accent',
  success: 'bg-teal-500 text-primary-foreground',
  danger: 'bg-destructive text-destructive-foreground'
}
</script>

<template>
  <button
    v-bind="$attrs"
    class="flex items-center justify-center gap-2 rounded px-4 py-2 transition active:scale-[.98] disabled:pointer-events-none"
    :class="variantsClass[variant]"
    :disabled="loading"
  >
    <span
      v-if="spinner && loading"
      class="h-4 w-4 animate-spin rounded-full border-2 border-dotted border-primary-foreground"
    ></span>
    <slot>Submit</slot>
  </button>
</template>
