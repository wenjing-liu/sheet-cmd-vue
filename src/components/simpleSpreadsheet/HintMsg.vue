<template>
  <div class="hint-msg">{{ hintMsg }}</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'hintMsg',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['hintMsg'])
  }
}
</script>

<style lang="scss" scoped>
.hint-msg {
  margin-bottom: 10px;
  color: red;
  font-size: 14px;
}
</style>
