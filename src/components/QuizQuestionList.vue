<script setup>
import { storeToRefs } from 'pinia'
import { useQuizStore } from '../stores/quiz'
import IconQuestion from './icons/IconQuestion.vue'

const store = useQuizStore()
const { questions, questionIndex } = storeToRefs(store)

const select = (index) => {
  console.log(index)
  questionIndex.value = index
}
</script>

<template>
  <div class="rounded border p-4">
    <div class="mb-4 flex justify-between">
      <span class="text-lg font-bold">Question List</span>
      <span
        class="flex h-6 w-6 cursor-pointer justify-center rounded-full border-2 border-foreground fill-foreground p-[2px]"
        ><IconQuestion
      /></span>
    </div>

    <ul class="grid grid-cols-5 gap-2">
      <li
        v-for="(question, i) in questions"
        class="flex aspect-square cursor-pointer items-center justify-center rounded border transition-colors hover:bg-accent"
        :class="{
          'bg-sky-100': question.answer !== null,
          'border-2 border-sky-300': i === questionIndex
        }"
        :key="question.question"
        @click="select(i)"
      >
        <span class="font-semibold md:text-xl">{{ i + 1 }}</span>
      </li>
    </ul>

    <div class="mt-4 flex justify-between text-sm font-medium">
      <BaseButton variant="border" v-if="questionIndex > 0" @click.stop="select(questionIndex - 1)"
        >Prev</BaseButton
      >
      <span></span>
      <BaseButton
        variant="border"
        v-if="questionIndex < questions.length - 1"
        @click.stop="select(questionIndex + 1)"
        >Next</BaseButton
      >
    </div>
  </div>
</template>
