<script setup>
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import { useQuizStore } from '../stores/quiz'
import QuizHelpModal from './QuizHelpModal.vue'
import IconQuestion from './icons/IconQuestion.vue'
import { useSettingsStore } from '../stores/settings'

const store = useQuizStore()
const { questions, questionIndex } = storeToRefs(store)

const {settings} = storeToRefs(useSettingsStore())
const select = (index) => {
  if(!settings.value.allowSkip) return
  questionIndex.value = index
}

const showModal = ref(false)
const openModal = () => {
  showModal.value = true
}
const closeModal = () => {
  showModal.value = false
}
</script>

<template>
  <div class="rounded border p-4">
    <div class="mb-4 flex justify-between">
      <span class="text-lg font-bold">Question List</span>
      <span
        @click="openModal"
        class="flex h-6 w-6 cursor-pointer justify-center rounded-full border-2 border-foreground fill-foreground p-[2px]"
        ><IconQuestion
      /></span>
    </div>
    <QuizHelpModal :show-modal="showModal" @close="closeModal" />
    <ul class="grid grid-cols-5 gap-2">
      <li
        v-for="(question, i) in questions"
        class="flex aspect-square cursor-pointer items-center justify-center rounded border transition-colors hover:bg-accent"
        :class="{
          'bg-sky-100 dark:bg-secondary': question.answer !== null,
          'border-2 border-sky-300': i === questionIndex
        }"
        :key="question.question"
        @click="select(i)"
      >
        <span class="font-semibold md:text-xl">{{ i + 1 }}</span>
      </li>
    </ul>
  </div>
</template>
