<template>
  <div id="print-callback">
    <table>
      <thead>
        <tr>
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
        <tr>
          <td>Centro comercial Moctezuma</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
        </tr>
        <tr>
          <td>Ernst Handel</td>
          <td>Roland Mendel</td>
          <td>Austria</td>
        </tr>
      </tbody>
    </table>
  </div>
  <button
    class="print-button"
    @click="print"
  >
    Print
  </button>
</template>

<script setup lang="ts">
import { usePaperizer } from 'paperizer'

const callback = () => {
  alert('This is a callback!')
}
const { paperize } = usePaperizer('print-callback', {}, callback)
const print = () => {
  paperize()
}
</script>
