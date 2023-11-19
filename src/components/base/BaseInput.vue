<script setup>
defineProps({
  modelValue: {
    type: [Number, String],
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  },
  label: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:modelValue'])
const onInput = (e) => {
  emit('update:modelValue', e.target.value)
}
</script>
<template>
  <label v-if="label" class="text-base font-semibold">{{ label }}</label>
  <input
    v-bind="$attrs"
    class="rounded border bg-background p-2"
    :type="type"
    :value="modelValue"
    @input="onInput"
  />
</template>
