<script setup>
import QuizQuestionForm from '../components/QuizQuestionForm.vue'
import QuizQuestionList from '../components/QuizQuestionList.vue'
</script>
<template>
  <main>
    <section class="mt-6">
      <div class="container max-w-lg mx-auto">
        <QuizQuestionList />
        <QuizQuestionForm />
      </div>
    </section>
  </main>
</template>
