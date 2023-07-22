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
            <TableHeader>ウイスキー</TableHeader>
            <TableHeader>銘柄</TableHeader>
            <TableHeader>香り</TableHeader>
            <TableHeader>味覚</TableHeader>
        </div>
        <WhiskyRow v-for="whisky in whiskies" :whisky="whisky" />
    </div>
</template>



<script setup>
import { whiskies } from '~/data/whisky.json'
import WhiskyRow from '../components/WhiskyRow.vue';

</script>
