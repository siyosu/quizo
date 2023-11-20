<script setup>
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import { useQuizStore } from '../stores/quiz';

const store = useQuizStore()
const { questions, results } = storeToRefs(store)

defineProps({
  showModal: {
    type: Boolean,
    required: true
  }
})
const emit = defineEmits(['close', 'confirm'])

const router = useRouter()
const closeModal = () => {
  router.push({ name: 'home' })
  store.reset()
  emit('close')
}
</script>

<template>
  <Teleport to="#modal">
    <BaseModal v-if="showModal && results">
      <div class="rounded border bg-background p-4">
        <div class="mb-2 border p-2">
          <div class="mx-auto mb-2 flex h-20 w-20 rounded-full border text-2xl font-bold">
            <span
              class="m-auto"
              :class="{
                'text-teal-500': ['A', 'B'].includes(results.grade),
                'text-amber-500': ['C', 'D'].includes(results.grade),
                'text-rose-500': ['E', 'F'].includes(results.grade)
              }"
              >{{ results.score }}</span
            >
          </div>
          <p class="flex flex-wrap justify-center gap-1 text-sm sm:text-base">
            You answered correctly
            <span>{{ results.correct.length }} of {{ questions.length }} questions</span>
          </p>
        </div>
        <p class="text-sm font-medium sm:text-base">
          {{ results.message }}
        </p>
        <div class="mt-4 flex gap-2 text-sm">
          <BaseButton class="w-full" @click="closeModal" variant="border">Take me home</BaseButton>
        </div>
      </div>
    </BaseModal>
  </Teleport>
</template>
