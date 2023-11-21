import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import { computed, readonly } from 'vue'

export const useSettingsStore = defineStore('settings', () => {
  const defaultSettings = {
    theme: 'dark',
    allowSkip: false
  }
  const settings = useStorage('settings', defaultSettings)
  const isDark = computed(() => {
    return settings.value.theme === 'dark'
  })

  const setTheme = () => {
    const html = document.querySelector('html')
    isDark.value ? html.classList.add('dark') : html.classList.remove('dark')
  }

  const toggleTheme = () => {
    isDark.value ? (settings.value.theme = 'light') : (settings.value.theme = 'dark')
    setTheme()
  }

  const toggleAllowSkip = () => {
    settings.value.allowSkip = !settings.value.allowSkip
  }

  setTheme()

  return { settings: readonly(settings), isDark, toggleTheme, toggleAllowSkip }
})
