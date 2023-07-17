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
    <div v-for="whisky in whiskies" grid grid-cols-4 py-3 text-sm px-1 md:px-0 border-b border-b-gray-300
      md:border-b-none>
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
  </div>
</template>

<script setup>
import { whiskies } from '~/data/whisky.json'

</script>
