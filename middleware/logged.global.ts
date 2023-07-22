import { useAdminStore } from "~/stores/admin"

export default defineNuxtRouteMiddleware(async (to, from) => {
    const nuxtApp = useNuxtApp()
    const store = useAdminStore(nuxtApp.$pinia)

    const { status } = await useFetch('/api/me')
    if (status.value === 'success') {
        store.isLoggedIn = true
    }
})
