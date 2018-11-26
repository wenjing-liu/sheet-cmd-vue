import { expect } from 'chai'
import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import myStore from '@/store'
import ResultTable from '@/components/simpleSpreadsheet/ResultTable.vue'
import i18n from '@/i18n'
import testUtil from '../test-util'
import tableHelper from '@/util/tableHelper'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(i18n)

describe('ResultTable.vue', () => {
  let store
  beforeEach(() => {
    store = myStore
  })

  it('renders a table when passed two numbers', () => {
    const tableX = 10
    const tableY = 10
    store.state.tableX = tableX
    store.state.tableY = tableY
    store.state.data = tableHelper.createTable(tableX, tableY)
    const wrapper = testUtil.mountComponent(ResultTable, { store, localVue })
    const msg = `rows: ${tableX} colums: ${tableY}`
    expect(wrapper.html()).to.include(msg)
  })
})
