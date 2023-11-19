<script setup>
defineProps({
  variant: {
    type: String,
    default: 'primary'
  },
  loading: {
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
  <div class="flex" :class="loading && 'cursor-not-allowed'">
    <button
      v-bind="$attrs"
      class="flex w-full items-center justify-center rounded px-4 py-2 transition active:scale-[.98] disabled:pointer-events-none"
      :class="variantsClass[variant]"
      :disabled="loading"
    >
      <slot>Submit</slot>
    </button>
  </div>
</template>
