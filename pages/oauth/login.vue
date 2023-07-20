<template>
    Loading
</template>

<script setup lang="ts">
import { useAdminStore } from '~/stores/admin';

const route = useRoute()
const router = useRouter()
const code = route.query?.code
const store = useAdminStore()

const { status, execute } = useFetch('/api/login', {
    method: 'POST',
    body: {
        code
    },
    server: false,
    immediate: false,
    watch: false,
})

watch(status, (status) => {
    if (status === "success") {
        store.isLoggedIn = true
        router.push('/')
    }
})

if (code) {
    execute()
}


</script>
