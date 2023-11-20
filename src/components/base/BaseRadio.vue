<script setup>
defineProps({
  modelValue: {
    type: [String, Number, Boolean],
    default: ''
  },
  value: {
    type: [String, Number, Boolean],
    required: true
  },
  label: {
    type: String,
    default: ''
  }
})
const emit = defineEmits(['update:modelValue'])
const onChange = (value) => {
  emit('update:modelValue', value)
}
</script>
<template>
  <label class="w-full cursor-pointer rounded border p-2 transition hover:bg-accent">
    <input
      v-bind="$attrs"
      :value="value"
      type="radio"
      @change="onChange(value)"
      :checked="value === modelValue"
    />
    <span class="ml-1" v-if="label" v-html="label"></span>
  </label>
</template>
