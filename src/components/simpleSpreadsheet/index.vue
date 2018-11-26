<template>
  <div class="spread-wrapper">
    <h1>{{ msg }}</h1>
    <div class="components-wrapper">
      <CmdInputField></CmdInputField>
      <HintMsg></HintMsg>
      <ResultTable></ResultTable>
    </div>
  </div>
</template>

<script>
import HintMsg from './HintMsg'
import CmdInputField from './CmdInputField'
import ResultTable from './ResultTable'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    HintMsg,
    CmdInputField,
    ResultTable
  }
}
</script>

<style scoped lang="scss">
.spread-wrapper {
  h1 { text-align: center; }
  .components-wrapper {
    max-width: 1440px;
    margin: 0 auto;
    padding: 15px 10px;
    border: 1px solid #ededed;
    box-shadow: 0 1px 5px rgba(128, 128, 128, 0.2);
    min-height: calc(90vh - 60px);
  }
}
</style>
