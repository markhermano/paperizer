<template>
  <div id="print-style">
    <table class="table table-striped">
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
import { usePaperizer } from '../../dist/paperizer'

const { paperize } = usePaperizer('print-style', {
  styles: [
    'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css'
  ]
})
const print = () => {
  paperize()
}
</script>
