<script setup>
defineProps({
  showModal: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['close', 'confirm'])
const closeModal = () => {
  emit('close')
}
const confirm = () => {
  emit('confirm')
}
</script>

<template>
  <Teleport to="#modal">
    <BaseModal v-if="showModal" @close="closeModal">
      <div class="rounded border bg-background p-4">
        <h4 class="text-lg font-semibold"><slot name="title">Are you sure?</slot></h4>
        <slot> </slot>
        <div class="mt-4 flex justify-end gap-2 text-sm">
          <BaseButton @click="closeModal" variant="border">Cancel</BaseButton>
          <BaseButton @click="confirm" variant="primary">Continue</BaseButton>
        </div>
      </div>
    </BaseModal>
  </Teleport>
</template>
