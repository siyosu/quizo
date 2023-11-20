<script setup>
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
</script>

<template>
  <Teleport to="#modal">
    <BaseModal v-show="showModal" @close="closeModal">
      <div class="rounded border bg-background p-4">
        <div class="mb-2">
          <h4 class="text-xl font-semibold">Help</h4>
        </div>

        <div class="mb-4 text-sm">
          <p>
            Choose the question by clicking on the question number or navigate through the previous
            or next button.
          </p>
          <p>You will get questions based on the preference that you provided</p>
        </div>

        <div class="mb-4">
          <h5 class="font-semibold">Quiz Type</h5>
          <ul class="flex list-inside list-disc flex-col gap-2 text-sm">
            <li class="flex gap-2">
              <span class="self-start rounded-full bg-amber-100 px-2 py-1">Multiple</span>You need
              to choose one answer from the 4 provided answer
            </li>
            <li class="flex gap-2">
              <span class="self-start rounded-full bg-indigo-100 px-2 py-1">Boolean</span>You need
              to choose if the provided question or statement is true or false
            </li>
          </ul>
        </div>

        <div>
          <h5 class="font-semibold">Submit Answers</h5>
          <p class="text-sm">
            After answering all questions, you can submit your answers and get the results. Your
            point will be calculated based on how many answers is correct.
          </p>
        </div>
        <div class="mt-4 flex justify-end">
          <BaseButton @click="closeModal" class="text-sm" variant="border">Close</BaseButton>
        </div>
      </div>
    </BaseModal>
  </Teleport>
</template>
