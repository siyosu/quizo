<script setup>
import { ref } from 'vue'
import quizService from '../services/quizService'
// import categories from '../stores/categories'
const isLoading = ref(false)
const questions = ref(null)
const questionsErrorMessage = ref(null)
const token = ref(null)
const tokenErrorMessage = ref(null)

const getQuestions = async () => {
  questions.value = null
  questionsErrorMessage.value = null
  isLoading.value = true
  const query = {
    category: 11,
    difficulty: 'medium',
    amount: 10,
    type: 'multiple',
    token: 'ca1a986b02f810a6917aacff6c16dded5e62a82b996b8307c43a169a83e4a457'
  }
  try {
    questions.value = await quizService.getQuetions(query)
  } catch (error) {
    questionsErrorMessage.value = error.message ?? 'Failed to fetch questions'
  } finally {
    isLoading.value = false
  }
}

const getToken = async () => {
  token.value = null
  tokenErrorMessage.value = null
  try {
    token.value = await quizService.getSessionToken()
  } catch (error) {
    tokenErrorMessage.value = error.message ?? 'Failed to fetch questions'
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <main>
    <button @click="getToken">Get Token</button>
    <p v-if="isLoading">Loading...</p>
    <div v-if="token">
      <pre>{{ JSON.stringify({ token }, null, 2) }}</pre>
    </div>
    <p v-if="tokenErrorMessage">{{ tokenErrorMessage }}</p>

    <button @click="getQuestions">Get Questions</button>
    <div v-if="questions">
      <pre>{{ JSON.stringify(questions, null, 2) }}</pre>
    </div>
    <p v-if="questionsErrorMessage">{{ questionsErrorMessage }}</p>
  </main>
</template>
