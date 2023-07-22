<template>
    <Dialog :show="store.dialogOpen" :close="store.closeDialog">
        <HDialogPanel class="w-full max-w-sm rounded bg-white flex justify-center px-4 py-10">
            <div w-full>
                <a v-if="!store.isLoggedIn" :href="loginURL">Login</a>
                <div v-else>
                    <WhiskyForm />
                </div>
            </div>
        </HDialogPanel>
    </Dialog>
</template>

<script setup lang="ts">
import { useAdminStore } from "~/stores/admin";

const store = useAdminStore()
const clientId = useRuntimeConfig().public.clientId
const loginURL = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${window.location.origin}/oauth/login`

window.addEventListener('keydown', (e) => {
    if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        store.dialogOpen = !store.dialogOpen
    }
})

</script>
