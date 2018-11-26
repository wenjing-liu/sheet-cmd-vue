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
@import './src/styles/components/_hintMsg.scss';
</style>
