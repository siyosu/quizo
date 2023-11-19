<script setup>
import { reactive } from 'vue'
import categories from '../stores/categories'

const difficulties = ['Any Difficulty', 'Easy', 'Medium', 'Hard']
const types = ['Any Type', 'Multiple', 'Boolean']

const preference = reactive({
  category: 0,
  amount: 10,
  dificulty: 'Any Difficulty',
  type: 'Any Type'
})
</script>
<template>
  <div class="mx-auto max-w-lg">
    <form class="flex flex-col gap-2 rounded-md border p-4 text-sm shadow-sm">
      <div class="flex flex-col">
        <BaseSelect v-model="preference.category" :list="categories" label="Category" />
      </div>
      <div class="flex flex-col">
        <BaseSelect v-model="preference.dificulty" :list="difficulties" label="Difficulty" />
      </div>
      <div class="flex flex-col">
        <BaseSelect v-model="preference.type" :list="types" label="Type" />
      </div>
      <div class="flex flex-col">
        <BaseInput v-model="preference.amount" type="number" label="Number of Questions" />
      </div>
      <BaseButton variant="border" />
      <pre>{{ JSON.stringify(preference, null, 2) }}</pre>
    </form>
  </div>
</template>
