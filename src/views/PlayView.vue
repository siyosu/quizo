<script setup>
import { ref } from 'vue'
import ConfirmModal from '../components/ConfirmModal.vue'
import QuizQuestionForm from '../components/QuizQuestionForm.vue'
import QuizQuestionList from '../components/QuizQuestionList.vue'
import QuizResultsModal from '../components/QuizResultsModal.vue'
import { useQuizStore } from '../stores/quiz'

const showConfirmModal = ref(false)
const showResultsModal = ref(false)

const closeConfirmModal = () => {
  showConfirmModal.value = false
}

const openConfirmModal = () => {
  showConfirmModal.value = true
}

const store = useQuizStore()
const setResults = () => {
  store.setResults()
  closeConfirmModal()
  showResultsModal.value = true
}

const closeResultsModal = () => {
  showResultsModal.value = false
}
</script>
<template>
  <main>
    <section class="mt-6">
      <div class="container">
        <div class="grid gap-4 md:grid-cols-2">
          <QuizQuestionList />
          <QuizQuestionForm />
          <div class="rounded border p-4 md:col-[2/3]">
            <BaseButton class="w-full" @click="openConfirmModal">Submit Answers</BaseButton>
            <ConfirmModal
              @close="closeConfirmModal"
              @confirm="setResults"
              :show-modal="showConfirmModal"
            >
              <p>
                Please review your questions and make sure you've answered all of them correctly!
                There is no going back!
              </p>
            </ConfirmModal>
            <QuizResultsModal @close="closeResultsModal" :show-modal="showResultsModal" />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
