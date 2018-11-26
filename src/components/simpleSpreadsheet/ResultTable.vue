<template>
  <div class="result-table-wrapper">
    <label>{{ $t('tableSize', [tableX, tableY]) }}</label>
    <table id="spreadsheetResult">
      <tbody>
        <tr v-for="(row, index) in data" :key="`row-${index}`">
          <td v-for="(cell, cellIndex) in row"
            :key="`cell-${cellIndex}`"
            :class="{notEmptyValue: ![undefined, null].includes(tableHelper.getValue(data, index + 1, cellIndex + 1))}">{{ tableHelper.getValue(data, index + 1, cellIndex + 1) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import tableHelper from '@/util/tableHelper'

export default {
  name: 'resultTable',
  data () {
    return {
      tableHelper
    }
  },
  computed: {
    ...mapGetters(['data', 'tableX', 'tableY'])
  }
}
</script>
<style lang="scss" scoped>
@import './src/styles/components/_resultTable.scss';
</style>
