<template>
  <div class="home">
    <SimpleSpreadsheet :msg='msg'/>
  </div>
</template>

<script>
import i18n from '@/i18n'
import SimpleSpreadsheet from '@/components/simpleSpreadsheet/index.vue'

export default {
  name: 'home',
  components: {
    SimpleSpreadsheet
  },
  data () {
    return {
      msg: i18n.t('msg')
    }
  }
}
</script>
