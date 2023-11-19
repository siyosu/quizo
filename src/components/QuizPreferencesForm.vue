<script setup>
import { reactive, ref } from 'vue'
import quizService from '../services/quizService'
import categories from '../stores/categories'
import { useQuizStore } from '../stores/quiz'
import { useNProgress } from '@vueuse/integrations/useNProgress'

const difficulties = ['Any Difficulty', 'Easy', 'Medium', 'Hard']
const types = ['Any Type', 'Multiple', 'Boolean']

const preference = reactive({
  category: 0,
  amount: 10,
  dificulty: 'Any Difficulty',
  type: 'Any Type'
})

const store = useQuizStore()
const errorMessage = ref(null)
const { isLoading } = useNProgress()

const getQuestions = async () => {
  errorMessage.value = false
  isLoading.value = true
  const query = { amount: preference.amount }
  preference.category !== 0 && (query.category = preference.category)
  preference.dificulty !== 'Any Difficulty' && (query.dificulty = preference.dificulty.toLowerCase())
  preference.type !== 'Any Type' && (query.type = preference.type.toLowerCase())
  try {
    const questions = await quizService.getQuetions(query)
    store.populateQuestions(questions)
  } catch (error) {
    errorMessage.value = error.message ?? 'Failed to get questions'
  } finally {
    isLoading.value = false
  }
}
</script>
<template>
  <div class="mx-auto max-w-lg">
    <form
      @submit.prevent="getQuestions"
      class="flex flex-col gap-2 rounded-md border p-4 text-sm shadow-sm"
    >
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
      <BaseButton :loading="isLoading" variant="border" />
      <pre>{{ JSON.stringify(preference, null, 2) }}</pre>
    </form>
  </div>
</template>
