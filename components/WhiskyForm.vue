<template>
    <form @submit.prevent="submit">
        <fieldset flex flex-col gap-2 p-4>
            <div flex gap-2>
                <label for="whisky_name">Name</label>
                <input name="whisky_name" v-model="formData.name" w-full />
            </div>
            <div flex gap-2>
                <label for="whisky_brand">Brand</label>
                <input name="whisky_brand" v-model="formData.brand" w-full />
            </div>
            <button type="submit">
                {{ store.whisky ? 'Update' : 'Add Whisky' }}
            </button>
        </fieldset>
    </form>
</template>

<script setup lang="ts">
import { useAdminStore } from "~/stores/admin"

const store = useAdminStore()

const formData = ref({
    name: store.whisky?.name ?? '',
    brand: store.whisky?.brand ?? '',
})

const body = computed(() => {
    return JSON.stringify(formData.value)
})

const { execute } = useFetch('/api/whisky', {
    method: 'POST',
    body,
    immediate: false,
    watch: false
})

const submit = () => {
    execute()
}

</script>
