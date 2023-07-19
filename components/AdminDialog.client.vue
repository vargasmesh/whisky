<template>
    <HeadlessDialog :open="store.dialogOpen" class="relative z-50">
        <div class="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div class="fixed inset-0 flex items-center justify-center p-4">
            <HeadlessDialogPanel class="w-full max-w-sm rounded bg-white">
                <HeadlessDialogTitle>Hello</HeadlessDialogTitle>
            </HeadlessDialogPanel>
        </div>
    </HeadlessDialog>
</template>

<script setup lang="ts">
import { useAdminStore } from "~/stores/admin";

const store = useAdminStore()

window.addEventListener('keydown', (e) => {
    if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        store.dialogOpen = !store.dialogOpen
    }
})

</script>
