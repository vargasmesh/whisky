import { Whisky } from '~/lib/whisky'
import { defineStore, skipHydrate } from 'pinia'
import { ref } from "vue"

export const useAdminStore = defineStore('admin', () => {
    const dialogOpen = ref(false)
    const isLoggedIn = ref(false)
    const whisky = ref<Whisky | null>(null)

    function selectWhisky(whisky: Whisky) {
        whisky = whisky
        dialogOpen.value = true
    }

    function closeDialog() {
        dialogOpen.value = false
        whisky.value = null
    }

    return {
        dialogOpen: skipHydrate(dialogOpen),
        isLoggedIn: skipHydrate(isLoggedIn),
        whisky: skipHydrate(whisky),
        closeDialog,
        selectWhisky
    }
})
