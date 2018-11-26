<template>
  <div class="result-table-wrapper">
    <label>{{ $t('tableSize', [tableX, tableY]) }}</label>
    <table id="spreadsheetResult">
      <tbody>
        <tr v-for="(row, index) in data" :key="`row-${index}`">
          <td v-for="(cell, cellIndex) in row"
            :key="`cell-${cellIndex}`"
            :class="{notEmptyValue: ![undefined, null].includes(data[index][cellIndex])}">{{ data[index][cellIndex] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'resultTable',
  computed: {
    ...mapGetters(['data', 'tableX', 'tableY'])
  }
}
</script>
<style lang="scss" scoped>
.result-table-wrapper {
  table {
    border: solid 1px #e0e0e0;
    border-collapse:collapse;
    color: #0C3A58;
    text-align: center;
    tbody {
      tr:nth-child(even) {
        background-color: #f8f8f8;
      }
      tr {
        border-bottom: solid 1px #e0e0e0;
      }
      td {
        width: 30px;
        height: 30px;
        border-right: solid 1px #e0e0e0;
      }
      .notEmptyValue {
        background-color: aqua;
      }
    }
  }
}
</style>
