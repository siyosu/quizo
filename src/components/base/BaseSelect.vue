<script setup>
defineProps({
  modelValue: {
    type: [String, Number],
    default: ''
  },
  list: {
    type: Array,
    required: true
  },
  label: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:modelValue'])
const onChange = (e) => {
  emit('update:modelValue', e.target.value)
}
</script>
<template>
  <label v-if="label" class="text-base font-semibold">{{ label }}</label>
  <select
    v-bind="$attrs"
    class="rounded border bg-background p-2"
    @change="onChange"
    :value="modelValue"
  >
    <option
      v-for="item in list"
      :key="item.id ?? item"
      :value="item.id ?? item"
      :selected="item.id ?? item === modelValue"
    >
      {{ item.name ?? item }}
    </option>
  </select>
</template>
