<template>
    <HTransitionRoot :show="show" as="template">
        <HDialog class="relative z-50" @close="close">
            <HTransitionChild enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
                leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0" as="template">
                <div class="fixed inset-0 bg-black/30" aria-hidden="true" />
            </HTransitionChild>
            <div class="fixed inset-0 flex justify-center p-4 text-center items-center">
                <HTransitionChild enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
                    enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
                    leave-to="opacity-0 scale-95" as="template">
                    <slot />
                </HTransitionChild>
            </div>
        </HDialog>
    </HTransitionRoot>
</template>

<script setup lang="ts">
const { show } = defineProps<{
    show: boolean,
    close: () => void
}>()
</script>
