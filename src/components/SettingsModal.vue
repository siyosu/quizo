<script setup>
import { storeToRefs } from 'pinia'
import { useSettingsStore } from '../stores/settings'
defineProps({
  showModal: {
    type: Boolean,
    required: true
  }
})
const emit = defineEmits(['close'])

const closeModal = () => {
  emit('close')
}

const store = useSettingsStore()
const { isDark, settings } = storeToRefs(store)
</script>

<template>
  <Teleport to="#modal">
    <BaseModal v-if="showModal" @close="closeModal">
      <div class="rounded border bg-background p-4">
        <h4 class="text-g font-semibold mb-2">Settings</h4>
        <div class="flex flex-col gap-2">
          <div class="flex justify-between gap-2">
            <span>Dark Theme</span>
            <button
              @click="store.toggleTheme"
              class="h-6 w-10 rounded-full border bg-accent p-[2px]"
            >
              <span
                class="block h-full w-1/2 rounded-full bg-primary transition-transform"
                :class="isDark ? 'translate-x-full' : 'translate-x-0'"
              ></span>
            </button>
          </div>
          <div class="flex justify-between gap-2">
            <span>Allow Skip</span>
            <button @click="store.toggleAllowSkip" class="h-6 w-10 rounded-full border bg-accent p-[2px]">
              <span
                class="block h-full w-1/2 rounded-full bg-primary transition-transform"
                :class="settings.allowSkip ? 'translate-x-full' : 'translate-x-0'"
              ></span>
            </button>
          </div>
        </div>
      </div>
    </BaseModal>
  </Teleport>
</template>
