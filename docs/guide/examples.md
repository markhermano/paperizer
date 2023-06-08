# Examples

## Basic
<Basic />

```html
<template>
  <div id="print">
    <table>
      ...
    </table>
  </div>

  <button class="print-button" @click="print">
    Print
  </button>
</template>

<script setup lang="ts">
import { usePaperizer } from 'paperizer'

const { paperize } = usePaperizer('print')
const print = () => {
  paperize()
}
</script>
```

## With Custom Styling
<WithStyles />

```html
<template>
  <div id="print">
    <table class="table table-striped">
      ...
    </table>
  </div>

  <button class="print-button" @click="print">
    Print
  </button>
</template>

<script setup lang="ts">
import { usePaperizer } from 'paperizer'

const { paperize } = usePaperizer('print', {
  styles: [
    'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css'
  ]
})
const print = () => {
  paperize()
}
</script>
```

## With Print Callback
<WithPrintCallback />

```html
<template>
  <div id="print">
    <table>
      ...
    </table>
  </div>

  <button class="print-button" @click="print">
    Print
  </button>
</template>

<script setup lang="ts">
import { usePaperizer } from 'paperizer'

const callback = () => {
  alert('This is a callback!')
}
const { paperize } = usePaperizer('print', {}, callback)
const print = () => {
  paperize()
}
</script>
```


<script setup lang="ts">
import Basic from '../examples/Basic.vue'
import WithStyles from '../examples/WithStyles.vue'
import WithPrintCallback from '../examples/WithPrintCallback.vue'
</script>
