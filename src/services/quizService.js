import axios from 'axios'

const ApiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: false,
  headers: {
    Accept: 'application/json'
  }
})

const get = async (endpoint, params = {}) => {
  try {
    const res = await ApiClient.get(endpoint, { params })
    return res.data
  } catch (error) {
    console.error(error)
    if(error.request && error.request.status === 429){
      error.message = "Slow down..."
    }
    throw error
  }
}

const errorMessages = {
  1: "Sorry, we can't find questions for this query",
  2: 'Query contains an invalid parameter.',
  3: 'Token Not Found',
  4: 'Session Token has returned all possible questions for the specified query. Resetting the Token is necessary.'
}

/**
 * Get list of questions for the provided query, use session token to prevent getting the same question twice.
 * @param {Object} query - { amount, category, difficulty, type, token }
 */
const getQuetions = async (query) => {
  const res = await get('/api.php', query)
  if (res.response_code !== 0) {
    throw new Error(errorMessages[res.response_code])
  }
  const questions = res.results
  return questions
}

/**
 * Get session token to prevent getting the same question twice.
 * Session tokens will be deleted after 6 hours of inactivity.
 */
const getSessionToken = async () => {
  const res = await get('/api_token.php', { command: 'request' })
  const token = res.token
  return token
}

/**
 * Reset the session token in case the user has exhausted all the possible questions available
 * @param {string} token
 */
const resetSessionToken = async (token) => {
  await get('/api_token.php', { command: 'reset', token })
}

/**
 * Using API from Open Trivia Database
 * @see https://opentdb.com/api_config.php
 */
const quizService = {
  getQuetions,
  getSessionToken,
  resetSessionToken
}

export default quizService
