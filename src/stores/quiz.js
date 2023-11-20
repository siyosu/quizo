import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'

const resultsMessages = {
  A: "Oh, wow! You're a genius. Did you even break a sweat on that?",
  B: "Impressive! I'm sure you didn't Google any of those answers, right?",
  C: "Not bad! I mean, it's not like anyone could do better... oh, wait.",
  D: 'You passed! Just barely, but hey, passing is passing.',
  E: 'A valiant effort. You know, some people enjoy challenges, right?',
  F: 'Well, that was... something. Maybe try guessing next time?'
}

export const useQuizStore = defineStore('quiz', () => {
  const questions = ref([])
  const questionIndex = ref(null)
  const selectedQuestion = ref(null)
  const results = ref(null)

  watch(questionIndex, () => {
    if (questionIndex.value >= questions.value.length || questionIndex.value < 0) {
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

  const setResults = () => {
    const correct = []
    const inCorrect = []
    questions.value.forEach((question) => {
      if (question.answer === question.correct_answer) {
        correct.push(question)
      } else {
        inCorrect.push(question)
      }
    })
    const score = (correct.length / questions.value.length) * 100
    let grade

    switch (true) {
      case score === 100:
        grade = 'A'
        break
      case score >= 80:
        grade = 'B'
        break
      case score >= 60:
        grade = 'C'
        break
      case score >= 40:
        grade = 'D'
        break
      case score > 0:
        grade = 'E'
        break
      default:
        grade = 'F'
    }

    results.value = {
      correct,
      inCorrect,
      score,
      grade,
      message: resultsMessages[grade]
    }
  }

  const reset = () => {
    questions.value = []
    questionIndex.value = null
    selectedQuestion.value = null
    results.value = null
  }

  return {
    questions,
    questionIndex,
    selectedQuestion,
    results,
    populateQuestions,
    setResults,
    reset
  }
})
