<script setup>
import { storeToRefs } from 'pinia'
import { useQuizStore } from '../stores/quiz'

const store = useQuizStore()
const { selectedQuestion: question } = storeToRefs(store)
</script>

<template>
  <div v-if="question" class="mt-4 rounded border p-4">
    <p class="mb-2 font-medium" v-html="question.question"></p>
    <ul v-if="question.type === 'multiple'" class="flex flex-col gap-2">
      <li v-for="option in question.option" :key="option" class="flex">
        <BaseRadio :value="option" v-model="question.answer" :label="option" />
      </li>
    </ul>
    <ul v-else class="flex flex-col gap-2">
      <li class="flex">
        <BaseRadio :value="true" v-model="question.answer" label="True" />
      </li>
      <li class="flex">
        <BaseRadio :value="false" v-model="question.answer" label="False" />
      </li>
    </ul>
  </div>
</template>
