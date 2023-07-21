<template>
    <nav w-full flex flex-row-reverse>
        <div border-black border-b-2 px-2>
            <a href="https://github.com/vargasmesh" target="_blank">vargasmesh</a>
        </div>
        <div border-black border-b-2 border-r-2 px-2>
            <a href="https://github.com/vargasmesh/whisky" target="_blank">
                ウイスキーログ
            </a>
        </div>
    </nav>
    <div container mx-auto mt-8>
        <div grid grid-cols-4 font-bold text-center>
            <div border-b-2 border-b-black mx-1 md:mx-0>ウイスキー</div>
            <div border-b-2 border-b-black mx-1 md:mx-0>銘柄</div>
            <div border-b-2 border-b-black mx-1 md:mx-0>香り</div>
            <div border-b-2 border-b-black mx-1 md:mx-0>味覚</div>
        </div>
        <WhiskyRow v-for="whisky in whiskies" :whisky="whisky" />
    </div>
</template>



<script setup>
import { whiskies } from '~/data/whisky.json'
import { useAdminStore } from "~/stores/admin";
import WhiskyRow from '../components/WhiskyRow.vue';

const store = useAdminStore()

const { status } = useFetch('/api/me', {
    method: 'GET',
    watch: false,
})

if (status.value === "success") {
    store.isLoggedIn = true
}

</script>
