<template>
  <div class="input_wrapper">
    <input :value="value" @change="event => onChangeHandler(event.target.value)"
      @keyup.enter="onEnterHandler()">
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import { COMMAND_KEYS, invalidMsg } from '@/util/consts'
import { cmdRegex } from '@/util/regex'

export default {
  name: 'cmdInputField',
  data () {
    return {
      value: ''
    }
  },
  computed: {
    ...mapGetters(['data', 'tableX', 'tableY']),
    valueArray () {
      const rawArray = this.value.split(' ') || []
      return rawArray.filter(item => item)
    }
  },
  methods: {
    ...mapActions(['setTableSize', 'setCellValue', 'setHintMsg', 'quit']),
    createTable (x, y) {
      this.setTableSize({ x, y })
    },
    setTableValue (x, y, value) {
      this.setCellValue({ x, y, value })
    },
    setMsg (hintMsg) {
      this.setHintMsg({ hintMsg })
    },
    clearMsg () {
      this.setHintMsg({ hintMsg: '' })
    },
    clearValue () {
      this.value = ''
    },
    onChangeHandler (value) {
      this.value = value
    },
    onEnterHandler () {
      if (!this.valueArray.length || !Object.values(COMMAND_KEYS).includes(this.valueArray[0])) {
        this.setMsg(invalidMsg.invalidCmd)
        return
      }
      switch (this.valueArray[0]) {
        case COMMAND_KEYS.CREATE_KEY:
          this.createOperation()
          break
        case COMMAND_KEYS.INSERT_KEY:
          this.insertOperation()
          break
        case COMMAND_KEYS.SUM_KEY:
          this.sumOperation()
          break
        case COMMAND_KEYS.EXIT_KEY:
          this.quitOperation()
          break
        default:
          this.setMsg(invalidMsg.invalidCmd)
          break
      }
    },
    createOperation () {
      if (!cmdRegex.CREATE_KEY.test(this.value)) {
        this.setMsg(invalidMsg.createInvalidMsg)
        return
      }
      this.createTable(Number(this.valueArray[1]), Number(this.valueArray[2]))
      this.clearValue()
    },
    insertOperation () {
      if (!cmdRegex.INSERT_KEY.test(this.value)) {
        this.setMsg(invalidMsg.insertInvalidMsg)
        return
      }
      if (!this.isTableExsiting()) {
        return
      }
      const x = Number(this.valueArray[1])
      const y = Number(this.valueArray[2])
      const value = Number(this.valueArray[3])
      if (x > this.tableX || y > this.tableY) {
        this.setMsg(invalidMsg.overflowTable)
        return
      }
      this.setTableValue(x - 1, y - 1, value)
      this.clearValue()
    },
    sumOperation () {
      if (!cmdRegex.SUM_KEY.test(this.value)) {
        this.setMsg(invalidMsg.insertInvalidMsg)
        return
      }
      if (!this.isTableExsiting()) {
        return
      }

      const x1 = Number(this.valueArray[1])
      const y1 = Number(this.valueArray[2])
      const x2 = Number(this.valueArray[3])
      const y2 = Number(this.valueArray[4])
      const x3 = Number(this.valueArray[5])
      const y3 = Number(this.valueArray[6])
      if (x1 > this.tableX || x2 > this.tableX || x3 > this.tableX || y1 > this.tableY || y2 > this.tableY || y3 > this.tableY) {
        this.setMsg(invalidMsg.overflowTable)
        return
      }
      const value1 = Number(this.data[x1 - 1][y1 - 1])
      const value2 = Number(this.data[x2 - 1][y2 - 1])
      const value = value1 + value2
      this.setTableValue(x3 - 1, y3 - 1, value)
      this.clearValue()
    },
    quitOperation () {
      this.quit()
      this.clearValue()
    },
    isTableExsiting () {
      if (this.tableX === 0 || this.tableY === 0) {
        this.setMsg(invalidMsg.createTableFirst)
        return false
      }
      return true
    }
  }
}
</script>

<style lang="scss" scoped>
 .input_wrapper {
   margin-bottom: 10px;
   input {
     width: 400px;
     height: 35px;
     font-size: 20px;
     padding: 0 5px;
   }
 }
</style>
