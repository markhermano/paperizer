<template>
  <div id="print">wow</div>
  <button @click="print">Print</button>
</template>

<script setup lang="ts">
import { usePaperizer } from '../../dist/main'

const { paperize } = usePaperizer('print', {
  target: '_parent',
})
const print = () => {
  paperize()
}
</script>
