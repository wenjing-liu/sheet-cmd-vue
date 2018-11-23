<template>
  <div class="home">
    <SimpleSpreadsheet :msg='msg'/>
  </div>
</template>

<script>
// @ is an alias to /src
import SimpleSpreadsheet from '@/components/SimpleSpreadsheet.vue'

export default {
  name: 'home',
  components: {
    SimpleSpreadsheet
  },
  data () {
    return {
      msg: 'Welcome to Simple SpreadSheet'
    }
  }
}
</script>
