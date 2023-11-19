import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useQuizStore = defineStore('quiz', () => {
  const questions = ref([])

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
  }

  return { questions, populateQuestions }
})
