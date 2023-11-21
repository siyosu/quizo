<script setup>
import IconSliders from './icons/IconSliders.vue'
import SettingsModal from './SettingsModal.vue'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()
const showModal = ref(false)

const openModal = () => {
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
}
</script>
<template>
  <header class="border-b">
    <div class="container py-6">
      <div class="flex justify-between">
        <RouterLink :to="{ name: 'home' }" class="text-2xl font-bold uppercase" href="#"
          >Quizo</RouterLink
        >
        <BaseButton
          v-if="router.currentRoute.value.name !== 'play'"
          @click="openModal"
          variant="border"
        >
          <span class="h-6 w-6 fill-foreground"><IconSliders /></span
        ></BaseButton>
        <SettingsModal :show-modal="showModal" @close="closeModal" />
      </div>
    </div>
  </header>
</template>
