<template>
  <div class="input_wrapper">
    <input :value="value" @change="event => onChangeHandler(event.target.value)"
      @keyup.enter="onEnterHandler()">
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import tableHelper from '@/util/tableHelper'
import { COMMAND_KEYS, invalidMsg, cmdRegex } from '@/util/consts'

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
      if (!this.isCellExsiting(x, y)) {
        this.setMsg(invalidMsg.overflowTable)
        return
      }
      this.setTableValue(x - 1, y - 1, value)
      this.clearValue()
    },
    sumOperation () {
      if (!cmdRegex.SUM_KEY.test(this.value)) {
        this.setMsg(invalidMsg.sumInValidMsg)
        return
      }
      if (!this.isTableExsiting()) {
        return
      }

      const x1 = Number(this.valueArray[1])
      const y1 = Number(this.valueArray[2])
      const x2 = Number(this.valueArray[3])
      const y2 = Number(this.valueArray[4])
      const x = Number(this.valueArray[5])
      const y = Number(this.valueArray[6])
      if (!this.isCellExsiting(x1, y1) || !this.isCellExsiting(x2, y2) || !this.isCellExsiting(x, y)) {
        this.setMsg(invalidMsg.overflowTable)
        return
      }

      const value = tableHelper.sumValue(this.data, x1, y1, x2, y2)
      if (value === false) {
        this.setMsg(invalidMsg.noneValue)
        return
      }
      this.setTableValue(x - 1, y - 1, value)
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
    },
    isCellExsiting (x, y) {
      return x > 0 && x <= this.tableX && y > 0 && y <= this.tableY
    }
  }
}
</script>

<style lang="scss" scoped>
@import './src/styles/components/_cmdInputField.scss';
</style>
