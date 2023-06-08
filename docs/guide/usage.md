# Usage

## Local Import
Import the composable directly to your component.

```html
<!-- App.vue -->
<script lang="ts" setup>
import { usePaperizer } from 'paperizer'

const { paperize } = usePaperizer('print-me')
const print = () => {
  paperize()
}
</script>

<template>
  <article>
    <div id="print-me">
      My document.
    </div>
    <button @click="print">Print</button>
  </article>
</template>
```

## Global Import
Paperizer has added a global method `$paperize` in the `app.config.globalProperties`.

```ts
// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import Paperizer from 'paperizer'

createApp(App)
  .use(Paperizer)
  .mount('#app')

```
<hr>

```html
<!-- App.vue -->
<script>
export default {
  data() {
    return {
      message: 'My Document'
    }
  },
  methods: {
    print() {
      this.$paperize('print-me')
    }
  }
}
</script>

<template>
  <article>
    <div id="print-me">
      {{ message }}
    </div>
    <button @click="print">Print</button>
  </article>
</template>
```