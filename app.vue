<template>
  <div>
    <div grid grid-cols-4 text-xl font-bold>
      <div>ウイスキー</div>
      <div>銘柄</div>
      <div>香り</div>
      <div>味覚</div>
    </div>
    <div v-for="whisky in whiskies" grid grid-cols-4>
      <div>
        {{ whisky.name }}
      </div>
      <div>
        {{ whisky.brand }}
      </div>
      <div>
        {{ whisky.nose.join(', ') }}
      </div>
      <div>
        {{ whisky.palate.join(', ') }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { whiskies } from '~/data/whisky.json'

</script>
