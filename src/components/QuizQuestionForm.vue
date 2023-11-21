<script setup>
import { storeToRefs } from 'pinia'
import { useQuizStore } from '../stores/quiz'

const store = useQuizStore()
const { selectedQuestion: question, questionIndex, questions } = storeToRefs(store)

const select = (index) => {
  questionIndex.value = index
}
</script>

<template>
  <div v-if="question" class="flex flex-col justify-between rounded border p-4">
    <div>
      <div class="mb-4 flex items-center justify-between gap-2">
        <span
          class="rounded-full bg-teal-100 px-4 py-1 text-xs sm:text-sm"
          v-html="question.category"
        ></span>
        <span
          class="rounded-full px-4 py-1 text-xs sm:text-sm"
          :class="question.type === 'multiple' ? 'bg-amber-100' : 'bg-indigo-100'"
          >{{ question.type[0].toUpperCase() + question.type.slice(1) }}</span
        >
      </div>
      <p class="mb-2 font-medium" v-html="question.question"></p>
      <ul v-if="question.type === 'multiple'" class="flex flex-col gap-2 text-sm">
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

    <div class="mt-4 flex justify-between text-sm font-medium">
      <BaseButton variant="border" v-if="questionIndex > 0" @click="select(questionIndex - 1)"
        >Prev</BaseButton
      >
      <span></span>
      <BaseButton
        variant="border"
        v-if="questionIndex < questions.length - 1"
        @click="select(questionIndex + 1)"
        >Next</BaseButton
      >
    </div>
  </div>
</template>
