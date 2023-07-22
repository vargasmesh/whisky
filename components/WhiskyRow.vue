<template>
    <div grid grid-cols-4 py-3 text-sm px-1 md:px-0 border-b border-b-gray-300 md:border-b-none :class="{
        'hover:bg-black/10': store.isLoggedIn
    }" @click="selectWhisky">
        <div px-4>
            {{ whisky.name }}
        </div>
        <div px-4>
            {{ whisky.brand }}
        </div>
        <div px-4>
            {{ whisky.nose.join(', ') }}
        </div>
        <div px-4>
            {{ whisky.palate.join(', ') }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { Whisky } from '../lib/whisky';
import { useAdminStore } from "~/stores/admin"

const { whisky } = defineProps<{
    whisky: Whisky
}>()

const store = useAdminStore()

const selectWhisky = () => {
    if (!store.isLoggedIn) return
    store.selectWhisky(whisky)
}

</script>
