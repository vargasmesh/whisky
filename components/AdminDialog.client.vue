<template>
    <HTransitionRoot :show="store.dialogOpen" as="template">
        <HDialog class="relative z-50" @close="closeDialog">
            <HTransitionChild enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
                leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0" as="template">
                <div class="fixed inset-0 bg-black/30" aria-hidden="true" />
            </HTransitionChild>
            <div class="fixed inset-0 flex justify-center p-4 text-center">
                <HTransitionChild enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
                    enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
                    leave-to="opacity-0 scale-95" as="template">
                    <HDialogPanel class="w-full max-w-sm max-h-2xl rounded bg-white">
                        <a v-if="!store.isLoggedIn" :href="loginURL">Login</a>
                        <div v-else>Hello</div>
                    </HDialogPanel>
                </HTransitionChild>
            </div>
        </HDialog>
    </HTransitionRoot>
</template>

<script setup lang="ts">
import { useAdminStore } from "~/stores/admin";

const store = useAdminStore()
const clientId = useRuntimeConfig().public.clientId
const loginURL = `https://github.com/login/oauth/authorize?client_id=${clientId}`

const closeDialog = () => {
    store.dialogOpen = false
}

window.addEventListener('keydown', (e) => {
    if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        store.dialogOpen = !store.dialogOpen
    }
})

</script>
