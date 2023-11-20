import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'

export const useQuizStore = defineStore('quiz', () => {
  const questions = ref([])
  const questionIndex = ref(null)
  const selectedQuestion = ref(null)

  watch(questionIndex, () => {
    if(questionIndex.value >= questions.value.length || questionIndex.value < 0){
      console.warn('The question index must be in the range of 0 and question length')
      return
    }
    selectedQuestion.value = questions.value[questionIndex.value]
  })

  const router = useRouter()
  
  const populateQuestions = (rawQuestions) => {
    questions.value = rawQuestions.map((question) => {
      const newQuestion = {
        type: question.type,
        difficulty: question.difficulty,
        category: question.category,
        question: question.question,
        correct_answer: question.correct_answer,
        answer: null
      }
      if (question.type === 'multiple') {
        const position = Math.floor(Math.random() * 4)
        newQuestion.option = [
          ...question.incorrect_answers.slice(0, position),
          question.correct_answer,
          ...question.incorrect_answers.slice(position)
        ]
      } else {
        newQuestion.correct_answer = question.correct_answer === 'True'
      }
      return newQuestion
    })
    questionIndex.value = 0
    router.push({ name: 'play' })
  }

  return { questions, questionIndex, selectedQuestion, populateQuestions }
})
